import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastify from "fastify";

import userRoutes from "./routes/users/index";

dotenv.config();

const app = fastify({
  logger: true,
});

// Registra o plugin CORS
app.register(cors, {
  origin: true, // Permite todas as origens em desenvolvimento
});

// Rota de teste
app.get("/", async () => {
  return { message: "API funcionando!" };
});

app.register(userRoutes);

// Inicia o servidor
async function start() {
  try {
    await app.listen({ port: 5000, host: "0.0.0.0" });
    console.log("Servidor rodando na porta 5000");
  }
  catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
