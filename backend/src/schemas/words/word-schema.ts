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

export const findWordByIdSchema = {
  tags: ["words"],
  description: "Busca uma palavra pelo ID",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
  },
};

export const findWordByWordSchema = {
  tags: ["words"],
  description: "Busca uma palavra pelo termo em inglês",
  params: Type.Object({
    word: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      english_word: Type.String(),
      portuguese_translation: Type.String(),
      difficulty_level: Type.String(),
    }),
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

export const deleteWordSchema = {
  tags: ["words"],
  description: "Deleta uma palavra do dicionário",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    204: Type.Null(),
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

export const checkTranslationSchema = {
  tags: ["words"],
  description: "Verifica se a tradução está correta",
  body: Type.Object({
    english_word: Type.String(),
    portuguese_translation: Type.String(),
  }),
  response: {
    200: Type.Object({
      is_correct: Type.Boolean(),
      correct_translation: Type.String(),
    }),
  },
};
