import type { FastifyReply, FastifyRequest } from "fastify";

import jwt from "jsonwebtoken";

declare module "fastify" {
  interface FastifyRequest {
    user: {
      userId: string;
      email: string;
    };
  }
}

export async function authenticateToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return reply.status(401).send({
        message: "Token de acesso requerido",
        error: "ACCESS_TOKEN_REQUIRED",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    request.user = {
      userId: decoded.userId,
      email: decoded.email,
    };
  }
  catch (error: any) {
    return reply.status(403).send({
      message: "Token inválido",
      error: `INVALID_TOKEN: ${error.message}`,
    });
  }
}

// Plugin para registrar o middleware
export async function authPlugin(fastify: any) {
  fastify.decorate("authenticate", authenticateToken);
}
