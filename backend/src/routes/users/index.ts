import type { FastifyInstance } from "fastify";

import { UserController } from "../../controllers/users/user-controller";
import {
  createUserSchema,
  deleteUserSchema,
  getUserByIdSchema,
  listUsersSchema,
  updateUserSchema,
} from "../../schemas/users/user-schema";

export async function userRoutes(app: FastifyInstance) {
  const userController = new UserController();

  app.post("/users", {
    schema: createUserSchema,
  }, userController.create.bind(userController));

  app.get("/users", {
    schema: listUsersSchema,
  }, userController.list.bind(userController));

  app.get("/users/:id", {
    schema: getUserByIdSchema,
  }, userController.findById.bind(userController));

  app.put("/users/:id", {
    schema: updateUserSchema,
  }, userController.update.bind(userController));

  app.delete("/users/:id", {
    schema: deleteUserSchema,
  }, userController.delete.bind(userController));
}

export default userRoutes;
