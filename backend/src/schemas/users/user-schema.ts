import { Type } from "@fastify/type-provider-typebox";

export const createUserSchema = {
  tags: ["users"],
  description: "Criar um novo usuário",
  body: Type.Object({
    name: Type.String(),
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 6 }),
    xp: Type.Number({ default: 0 }),
    lives: Type.Number({ default: 5 }),
  }),
  response: {
    201: Type.Object({
      id: Type.String(),
      name: Type.String(),
      email: Type.String(),
      xp: Type.Number(),
      lives: Type.Number(),
    }),
  },
};

export const updateUserSchema = {
  tags: ["users"],
  description: "Atualizar um usuário",
  params: Type.Object({
    id: Type.String(),
  }),
  body: Type.Object({
    name: Type.String(),
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 6 }),
    newPassword: Type.Optional(Type.String({ minLength: 6 })),
    confirmNewPassword: Type.Optional(Type.String({ minLength: 6 })),
    newName: Type.Optional(Type.String()),
    newEmail: Type.Optional(Type.String({ format: "email" })),
    confirmNewEmail: Type.Optional(Type.String({ format: "email" })),
  }),
  response: {
    200: Type.Object({
      message: Type.String(),
      user: Type.Object({
        id: Type.String(),
        name: Type.String(),
        email: Type.String(),
        xp: Type.Number(),
        lives: Type.Number(),
      }),
    }),
    400: Type.Object({
      message: Type.String(),
      error: Type.String(),
    }),
    401: Type.Object({
      message: Type.String(),
      error: Type.String(),
    }),
  },
};

export const listUsersSchema = {
  tags: ["users"],
  description: "Listar todos os usuários",
  response: {
    200: Type.Array(Type.Object({
      id: Type.String(),
      name: Type.String(),
      email: Type.String(),
      xp: Type.Number(),
      lives: Type.Number(),
    })),
  },
};

export const getUserByIdSchema = {
  tags: ["users"],
  description: "Buscar usuário por ID",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      name: Type.String(),
      email: Type.String(),
      xp: Type.Number(),
      lives: Type.Number(),
    }),
  },
};

export const deleteUserSchema = {
  tags: ["users"],
  description: "Deletar um usuário",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    204: Type.Null(),
  },
};
