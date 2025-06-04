import type { FastifyInstance } from "fastify/fastify";

import { WordController } from "../../controllers/words/word-controller";
import { createWordSchema, deleteWordSchema, findWordByIdSchema, findWordByWordSchema, getRandomWordSchema, listWordsSchema, updateWordSchema } from "../../schemas/words/word-schema";

export async function wordRoutes(app: FastifyInstance) {
  const wordController = new WordController();

  app.post("/words", {
    schema: createWordSchema,
  }, wordController.create);

  app.get("/words", {
    schema: listWordsSchema,
  }, wordController.list);

  app.get("/words/search/by-id/:id", {
    schema: findWordByIdSchema,
  }, wordController.findById);

  app.get("/words/search/by-word/:word", {
    schema: findWordByWordSchema,
  }, wordController.findByWord);

  app.put("/words/:id", {
    schema: updateWordSchema,
  }, wordController.update);

  app.delete("/words/:id", {
    schema: deleteWordSchema,
  }, wordController.delete);

  app.get("/words/random", {
    schema: getRandomWordSchema,
  }, wordController.getRandomWord);
}

export default wordRoutes;
