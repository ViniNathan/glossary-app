import type { FastifyInstance } from "fastify";

import { AttemptController } from "../../controllers/attempts/attempt-controller";
import {
  createAttemptSchema,
  deleteAttemptSchema,
  getAllAttemptsSchema,
  getAttemptSchema,
  updateAttemptSchema,
} from "../../schemas/attempts/attempt-schema";

export async function attemptRoutes(app: FastifyInstance) {
  const attemptController = new AttemptController();

  app.post("/attempts", {
    schema: createAttemptSchema,
  }, attemptController.create.bind(attemptController));

  app.get("/attempts", {
    schema: getAllAttemptsSchema,
  }, attemptController.list.bind(attemptController));

  app.get("/attempts/:id", {
    schema: getAttemptSchema,
  }, attemptController.findById.bind(attemptController));

  app.put("/attempts/:id", {
    schema: updateAttemptSchema,
  }, attemptController.update.bind(attemptController));

  app.delete("/attempts/:id", {
    schema: deleteAttemptSchema,
  }, attemptController.delete.bind(attemptController));
}

export default attemptRoutes;
