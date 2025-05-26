import type { CreateAttemptDTO, UpdateAttemptDTO } from "../../types/attempts/attempt-type";

import { AttemptRepository } from "../../repositories/attempts/attempt-repository";
import { AppError } from "../../utils/errors/app-error";

export class AttemptService {
  constructor(private attemptRepository = new AttemptRepository()) {}

  async create(data: CreateAttemptDTO) {
    return this.attemptRepository.create(data);
  }

  async list() {
    return this.attemptRepository.list();
  }

  async findById(id: string) {
    const attempt = await this.attemptRepository.findById(id);
    if (!attempt) {
      throw new AppError("Tentativa não encontrada", 404);
    }
    return attempt;
  }

  async update(id: string, data: UpdateAttemptDTO) {
    await this.findById(id);
    return this.attemptRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.attemptRepository.delete(id);
  }
}
