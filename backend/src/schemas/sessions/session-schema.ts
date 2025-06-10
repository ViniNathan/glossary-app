import { Type } from "@fastify/type-provider-typebox";

export const startSessionSchema = {
  tags: ["sessions"],
  description: "Iniciar uma nova sessão",
  body: Type.Object({
    userId: Type.String(),
    start_time: Type.String({ format: "date-time" }),
    lives_remaining: Type.Number(),
  }),
  response: {
    201: Type.Object({
      success: Type.Boolean(),
      data: Type.Object({
        id: Type.String(),
        userId: Type.String(),
        start_time: Type.String({ format: "date-time" }),
        lives_remaining: Type.Number(),
        xp_earned: Type.Number(),
      }),
    }),
    400: Type.Object({
      success: Type.Boolean(),
      error: Type.String(),
    }),
  },
};

export const endSessionSchema = {
  tags: ["sessions"],
  description: "Finalizar uma sessão",
  body: Type.Object({
    sessionId: Type.String(),
    end_time: Type.String({ format: "date-time" }),
    lives_remaining: Type.Number(),
    xp_earned: Type.Number(),
  }),
  response: {
    200: Type.Object({
      success: Type.Boolean(),
      data: Type.Object({
        id: Type.String(),
        sessionId: Type.String(),
        end_time: Type.String({ format: "date-time" }),
        lives_remaining: Type.Number(),
        xp_earned: Type.Number(),
      }),
    }),
    400: Type.Object({
      success: Type.Boolean(),
      error: Type.String(),
    }),
  },
};

export const getSessionSchema = {
  tags: ["sessions"],
  description: "Obter detalhes de uma sessão",
  params: Type.Object({
    sessionId: Type.String(),
  }),
  response: {
    200: Type.Object({
      success: Type.Boolean(),
      data: Type.Object({
        id: Type.String(),
        sessionId: Type.String(),
        userId: Type.String(),
        start_time: Type.String({ format: "date-time" }),
        end_time: Type.Optional(Type.String({ format: "date-time" })),
        lives_remaining: Type.Number(),
        xp_earned: Type.Number(),
      }),
    }),
    404: Type.Object({
      success: Type.Boolean(),
      error: Type.String(),
    }),
  },
};
