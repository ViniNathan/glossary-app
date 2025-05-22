import { PrismaClient } from "@prisma/client";

import type { CreateWordDTO, UpdateWordDTO } from "../../types/words/word-types";

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
    return this.prisma.word.findUnique({
      where: { word },
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
}
