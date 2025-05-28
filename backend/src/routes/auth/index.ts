import type { FastifyInstance } from "fastify";

import { AuthController } from "../../controllers/auth/auth-controller";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  validateTokenSchema,
} from "../../schemas/auth/auth-schema";

export async function authRoutes(fastify: FastifyInstance) {
  const authController = new AuthController();

  fastify.post(
    "/register",
    { schema: registerSchema },
    authController.register.bind(authController),
  );

  fastify.post(
    "/login",
    { schema: loginSchema },
    authController.login.bind(authController),
  );

  fastify.post(
    "/refresh",
    { schema: refreshTokenSchema },
    authController.refreshToken.bind(authController),
  );

  fastify.get(
    "/validate",
    { schema: validateTokenSchema },
    authController.validate.bind(authController),
  );
}

export default authRoutes;
