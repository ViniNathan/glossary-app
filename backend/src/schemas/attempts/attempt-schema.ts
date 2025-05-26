import { Type } from "@fastify/type-provider-typebox";

export const createAttemptSchema = {
  tags: ["attempts"],
  description: "Criar uma nova tentativa",
  body: Type.Object({
    sessionId: Type.String(),
    wordId: Type.String(),
    translation_method: Type.String(),
    is_correct: Type.Boolean(),
  }),
  response: {
    201: Type.Object({
      id: Type.String(),
      sessionId: Type.String(),
      wordId: Type.String(),
      translation_method: Type.String(),
      is_correct: Type.Boolean(),
      createdAt: Type.String({ format: "date-time" }),
      updatedAt: Type.String({ format: "date-time" }),
    }),
  },
};

export const updateAttemptSchema = {
  tags: ["attempts"],
  description: "Atualizar uma tentativa",
  params: Type.Object({
    id: Type.String(),
  }),
  body: Type.Partial(
    Type.Object({
      sessionId: Type.Optional(Type.String()),
      wordId: Type.Optional(Type.String()),
      translation_method: Type.Optional(Type.String()),
      is_correct: Type.Optional(Type.Boolean()),
    }),
  ),
  response: {
    200: Type.Object({
      id: Type.String(),
      sessionId: Type.String(),
      wordId: Type.String(),
      translation_method: Type.String(),
      is_correct: Type.Boolean(),
      createdAt: Type.String({ format: "date-time" }),
      updatedAt: Type.String({ format: "date-time" }),
    }),
  },
};

export const getAllAttemptsSchema = {
  tags: ["attempts"],
  description: "Listar todas as tentativas",
  response: {
    200: Type.Array(
      Type.Object({
        id: Type.String(),
        sessionId: Type.String(),
        wordId: Type.String(),
        translation_method: Type.String(),
        is_correct: Type.Boolean(),
        createdAt: Type.String({ format: "date-time" }),
        updatedAt: Type.String({ format: "date-time" }),
      }),
    ),
  },
};

export const getAttemptSchema = {
  tags: ["attempts"],
  description: "Buscar uma tentativa por ID",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      sessionId: Type.String(),
      wordId: Type.String(),
      translation_method: Type.String(),
      is_correct: Type.Boolean(),
      createdAt: Type.String({ format: "date-time" }),
      updatedAt: Type.String({ format: "date-time" }),
    }),
  },
};

export const deleteAttemptSchema = {
  tags: ["attempts"],
  description: "Deletar uma tentativa",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    204: Type.Null(),
  },
};
