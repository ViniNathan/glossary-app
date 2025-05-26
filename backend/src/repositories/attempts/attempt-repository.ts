import type { CreateAttemptDTO, UpdateAttemptDTO } from "../../types/attempts/attempt-type";

import { PrismaClient } from "../../generated/prisma";

export class AttemptRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create(data: CreateAttemptDTO) {
    return this.prisma.attempt.create({
      data,
    });
  }

  async list() {
    return this.prisma.attempt.findMany();
  }

  async findById(id: string) {
    return this.prisma.attempt.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateAttemptDTO) {
    return this.prisma.attempt.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.attempt.delete({
      where: { id },
    });
  }
}
