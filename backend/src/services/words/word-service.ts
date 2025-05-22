import type { CreateWordDTO, UpdateWordDTO } from "../../types/words/word-types";

import { WordRepository } from "../../repositories/words/word-repository";
import { AppError } from "../../utils/errors/app-error";

export class WordService {
  constructor(private wordRepository = new WordRepository()) { }

  async create(data: CreateWordDTO) {
    const wordExists = await this.wordRepository.findByWord(data.english_word);
    if (wordExists) {
      throw new AppError("Palavra já cadastrada", 400);
    }
    return this.wordRepository.create(data);
  }

  async list() {
    return this.wordRepository.list();
  }

  async findById(id: string) {
    const word = await this.wordRepository.findById(id);
    if (!word) {
      throw new AppError("Palavra não encontrada", 404);
    }
    return word;
  }

  async findByWord(word: string) {
    const wordExists = await this.wordRepository.findByWord(word);
    if (!wordExists) {
      throw new AppError("Palavra não encontrada", 404);
    }
    return wordExists;
  }

  async update(id: string, data: UpdateWordDTO) {
    await this.findById(id);
    return this.wordRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.wordRepository.delete(id);
  }
}
