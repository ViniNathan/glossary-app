import { z } from "zod/v4";

export const createUserSchema = {
  body: z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  }),
  response: {
    201: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }),
  },
};

export const updateUserSchema = {
  body: z.object({
    name: z.optional(z.string()),
    email: z.optional(z.email()),
    password: z.optional(z.string().min(6)),
  }),
  response: {
    200: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }),
  },
};
