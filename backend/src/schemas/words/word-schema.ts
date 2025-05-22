import { Type } from "@fastify/type-provider-typebox";

export const createWordSchema = {
  body: Type.Object({
    english_word: Type.String(),
    portuguese_translation: Type.String(),
    difficulty_level: Type.String(),
  }),
  response: {
    201: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
  },
};

export const updateWordSchema = {
  body: Type.Partial(createWordSchema.body),
  response: {
    200: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
  },
};
