import { Type } from "@fastify/type-provider-typebox";

export const createUserSchema = {
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
  body: Type.Object({
    name: Type.Optional(Type.String()),
    email: Type.Optional(Type.String({ format: "email" })),
    password: Type.Optional(Type.String({ minLength: 6 })),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      name: Type.String(),
      email: Type.String(),
    }),
  },
};
