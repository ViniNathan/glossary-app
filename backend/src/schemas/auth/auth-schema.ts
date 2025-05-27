import { Type } from "@fastify/type-provider-typebox";

export const registerSchema = {
  tags: ["auth"],
  description: "Registrar um novo usuário",
  body: Type.Object({
    name: Type.String({ minLength: 3, maxLength: 50 }),
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 6, maxLength: 100 }),
    confirmPassword: Type.String({ minLength: 6, maxLength: 100 }),
  }),
  response: {
    201: Type.Object({
      message: Type.String(),
      user: Type.Object({
        id: Type.String(),
        name: Type.String(),
        email: Type.String(),
        xp: Type.Number(),
        lives: Type.Number(),
      }),
      token: Type.String(),
    }),
    400: Type.Object({
      message: Type.String(),
      error: Type.String(),
    }),
    409: Type.Object({
      message: Type.String(),
      error: Type.String(),
    }),
  },
};

export const loginSchema = {
  tags: ["auth"],
  description: "Login de usuário",
  body: Type.Object({
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 6, maxLength: 100 }),
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
      token: Type.String(),
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

export const refreshTokenSchema = {
  tags: ["auth"],
  description: "Atualizar o token de autenticação",
  body: Type.Object({
    refreshToken: Type.String(),
  }),
  response: {
    200: Type.Object({
      message: Type.String(),
      refreshToken: Type.String(),
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
