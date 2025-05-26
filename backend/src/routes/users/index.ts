import type { FastifyInstance } from "fastify";

import { UserController } from "../../controllers/users/user-controller";
import { createUserSchema, updateUserSchema } from "../../schemas/users/user-schema";

export async function userRoutes(app: FastifyInstance) {
  const userController = new UserController();

  app.post("/users", {
    schema: createUserSchema,
  }, userController.create);

  app.get("/users", userController.list);

  app.get("/users/:id", userController.findById);

  app.put("/users/:id", {
    schema: updateUserSchema,
  }, userController.update);

  app.delete("/users/:id", userController.delete);
}

// Exporta o plugin para ser registrado no servidor principal
export default userRoutes;
