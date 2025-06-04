import type { FastifyInstance } from "fastify/fastify";

import { WordController } from "../../controllers/words/word-controller";
import { createWordSchema, deleteWordSchema, findWordByIdSchema, findWordByWordSchema, getRandomWordSchema, listWordsSchema, updateWordSchema } from "../../schemas/words/word-schema";

export async function wordRoutes(app: FastifyInstance) {
  const wordController = new WordController();

  app.post("/words", {
    schema: createWordSchema,
  }, wordController.create.bind(wordController));

  app.get("/words", {
    schema: listWordsSchema,
  }, wordController.list.bind(wordController));

  app.get("/words/search/by-id/:id", {
    schema: findWordByIdSchema,
  }, wordController.findById.bind(wordController));

  app.get("/words/search/by-word/:word", {
    schema: findWordByWordSchema,
  }, wordController.findByWord.bind(wordController));

  app.put("/words/:id", {
    schema: updateWordSchema,
  }, wordController.update.bind(wordController));

  app.delete("/words/:id", {
    schema: deleteWordSchema,
  }, wordController.delete.bind(wordController));

  app.get("/words/random", {
    schema: getRandomWordSchema,
  }, wordController.getRandomWord.bind(wordController));
}

export default wordRoutes;
