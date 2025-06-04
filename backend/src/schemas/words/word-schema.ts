import { Type } from "@fastify/type-provider-typebox";

export const createWordSchema = {
  tags: ["Words"],
  description: "Cria uma nova palavra no dicionário",
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
  tags: ["Words"],
  description: "Atualiza uma palavra existente no dicionário",
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

export const getRandomWordSchema = {
  response: {
    200: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
  },
};
