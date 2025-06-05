import type { FastifyReply, FastifyRequest } from "fastify";

import type { CreateWordDTO, UpdateWordDTO } from "../../types/words/word-types";

import { WordService } from "../../services/words/word-service";

export class WordController {
  constructor(private wordService = new WordService()) { }

  async create(request: FastifyRequest<{ Body: CreateWordDTO }>, reply: FastifyReply) {
    const word = await this.wordService.create(request.body);
    return reply.status(201).send(word);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const words = await this.wordService.list();
    return reply.send(words);
  }

  async findById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const word = await this.wordService.findById(request.params.id);
    return reply.send(word);
  }

  async findByWord(request: FastifyRequest<{ Params: { word: string } }>, reply: FastifyReply) {
    const word = await this.wordService.findByWord(request.params.word);
    return reply.send(word);
  }

  async update(
    request: FastifyRequest<{ Params: { id: string }; Body: UpdateWordDTO }>,
    reply: FastifyReply,
  ) {
    const word = await this.wordService.update(request.params.id, request.body);
    return reply.send(word);
  }

  async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.wordService.delete(request.params.id);
    return reply.status(204).send();
  }

  async getRandomWord(request: FastifyRequest, reply: FastifyReply) {
    const randomWord = await this.wordService.getRandomWord();
    return reply.send(randomWord);
  }

  async checkTranslation(
    request: FastifyRequest<{ Body: { english_word: string; portuguese_translation: string } }>,
    reply: FastifyReply,
  ) {
    const { english_word, portuguese_translation } = request.body;
    const result = await this.wordService.checkTranslation(english_word, portuguese_translation);
    return reply.send(result);
  }
}
