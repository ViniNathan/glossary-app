import type { CreateWordDTO, UpdateWordDTO } from "../../types/words/word-types";

import { PrismaClient } from "../../generated/prisma";

export class WordRepository {
  constructor(private prisma = new PrismaClient()) { }

  async create(data: CreateWordDTO) {
    return this.prisma.word.create({
      data,
    });
  }

  async list() {
    return this.prisma.word.findMany();
  }

  async findById(id: string) {
    return this.prisma.word.findUnique({
      where: { id },
    });
  }

  async findByWord(word: string) {
    return this.prisma.word.findFirst({
      where: { english_word: word },
    });
  }

  async update(id: string, data: UpdateWordDTO) {
    return this.prisma.word.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.word.delete({
      where: { id },
    });
  }

  async getRandomWord() {
    const wordCount = await this.prisma.word.count();
    if (wordCount === 0) {
      return null;
    }

    const skip = Math.floor(Math.random() * wordCount);
    return this.prisma.word.findFirst({
      skip,
    });
  }

  async checkTranslation(english_word: string, portuguese_translation: string) {
    return this.prisma.word.findFirst({
      where: {
        english_word,
        portuguese_translation,
      },
    });
  }
}
