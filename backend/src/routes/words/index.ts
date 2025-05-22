import { FastifyInstance } from "fastify/fastify";
import { WordController } from "../../controllers/words/word-controller";
import { createWordSchema, updateWordSchema } from "../../schemas/words/word-schema";

export async function wordRoutes(app: FastifyInstance) {
    const wordController = new WordController();

    app.post("/words", {
        schema: createWordSchema,
    }, wordController.create);

    app.get("/words", wordController.list);

    app.get("/words/search/:id", wordController.findById);

    app.get("/words/search/:word", wordController.findByWord);

    app.put("/words/:id", {
        schema: updateWordSchema,
    }, wordController.update);

    app.delete("/words/:id", wordController.delete);
}