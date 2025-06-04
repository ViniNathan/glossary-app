import { Type } from "@fastify/type-provider-typebox";

export const createWordSchema = {
  tags: ["words"],
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

export const listWordsSchema = {
  tags: ["words"],
  description: "Lista todas as palavras do dicionário",
  response: {
    200: Type.Array(
      Type.Object({
        id: Type.String(),
        english_word: Type.String(),
        portuguese_translation: Type.String(),
        difficulty_level: Type.String(),
      }),
    ),
  },
};

export const updateWordSchema = {
  tags: ["words"],
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
  tags: ["words"],
  description: "Obtém uma palavra aleatória do dicionário",
  response: {
    200: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
  },
};
