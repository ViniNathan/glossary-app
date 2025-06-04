import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastify from "fastify";

import { authPlugin } from "./middleware/auth-middleware";
import attemptRoutes from "./routes/attempts";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import wordRoutes from "./routes/words";

dotenv.config();

const app = fastify({
  logger: true,
});

async function build() {
  try {
    // Registra o plugin CORS
    await app.register(cors, {
      origin: true, // Permite todas as origens em desenvolvimento
    });

    // Registra o plugin Swagger para documentação da API
    await app.register(import("@fastify/swagger"), {
      openapi: {
        openapi: "3.0.0", // Versão do OpenAPI
        info: {
          title: "API Documentation",
          description: "Documentação da API com Fastify e Prisma",
          version: "1.0.0",
        },
      },
    });

    // Registra o plugin Swagger UI para visualização da documentação
    await app.register(import("@fastify/swagger-ui"), {
      routePrefix: "/docs", // Rota onde a documentação estará disponível
      uiConfig: {
        docExpansion: "none", // Retrai as seções por padrão
        deepLinking: true, // Permite links diretos para endpoints específicos
      },
      staticCSP: true,
    });

    // Registra o plugin de autenticação
    await app.register(authPlugin);

    // Registra as rotas de usuários
    await app.register(userRoutes, { prefix: "/api" });

    // Registra as rotas de tentativas
    await app.register(attemptRoutes, { prefix: "/api" });

    // Registra as rotas de autenticação
    await app.register(authRoutes, { prefix: "/api/auth" });

    // Registra as rotas de palavras
    await app.register(wordRoutes, { prefix: "/api" });

    return app;
  }
  catch (err) {
    app.log.error(err);
    throw err;
  }
}

// Inicia o servidor
async function start() {
  try {
    const server = await build();
    await server.listen({ port: 5000, host: "0.0.0.0" });
    console.log("Servidor rodando na porta 5000");
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
