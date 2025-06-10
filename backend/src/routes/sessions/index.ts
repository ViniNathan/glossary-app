import type { FastifyInstance } from "fastify";

import { SessionController } from "../../controllers/sessions/session-controller";
import {
  endSessionSchema,
  getSessionSchema,
  startSessionSchema,
} from "../../schemas/sessions/session-schema";

export async function sessionRoutes(fastify: FastifyInstance) {
  const sessionController = new SessionController();

  fastify.post(
    "/start",
    { schema: startSessionSchema },
    sessionController.startSession.bind(sessionController),
  );

  fastify.post(
    "/end",
    { schema: endSessionSchema },
    sessionController.endSession.bind(sessionController),
  );

  fastify.get(
    "/:sessionId",
    { schema: getSessionSchema },
    sessionController.getSession.bind(sessionController),
  );
}
export default sessionRoutes;
