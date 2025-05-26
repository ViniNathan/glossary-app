import type { FastifyInstance } from "fastify";

import { UserController } from "../../controllers/users/user-controller";
import { createUserSchema, updateUserSchema } from "../../schemas/users/user-schema";

export async function userRoutes(app: FastifyInstance) {
  const userController = new UserController();

  app.post("/users", {
    schema: createUserSchema,
  }, userController.create.bind(userController));

  app.get("/users", userController.list.bind(userController));

  app.get("/users/:id", userController.findById.bind(userController));

  app.put("/users/:id", {
    schema: updateUserSchema,
  }, userController.update.bind(userController));

  app.delete("/users/:id", userController.delete.bind(userController));
}

// Exporta o plugin para ser registrado no servidor principal
export default userRoutes;
