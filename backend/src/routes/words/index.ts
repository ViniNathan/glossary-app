import type { FastifyInstance } from "fastify/fastify";

import { WordController } from "../../controllers/words/word-controller";
import { createWordSchema, getRandomWordSchema, updateWordSchema } from "../../schemas/words/word-schema";

export async function wordRoutes(app: FastifyInstance) {
  const wordController = new WordController();

  app.post("/words", {
    schema: createWordSchema,
  }, wordController.create);

  app.get("/words", wordController.list);

  app.get("/words/search/by-id/:id", wordController.findById);

  app.get("/words/search/by-word/:word", wordController.findByWord);

  app.put("/words/:id", {
    schema: updateWordSchema,
  }, wordController.update);

  app.delete("/words/:id", wordController.delete);

  app.get("/words/random", {
    schema: getRandomWordSchema,
  }, wordController.getRandomWord);
}

export default wordRoutes;
