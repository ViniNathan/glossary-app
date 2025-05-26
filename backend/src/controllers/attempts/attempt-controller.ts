import type { FastifyReply, FastifyRequest } from "fastify";

import type { CreateAttemptDTO, UpdateAttemptDTO } from "../../types/attempts/attempt-type";

import { AttemptService } from "../../services/attempts/attempt-service";

export class AttemptController {
  constructor(private attemptService = new AttemptService()) {}

  async create(request: FastifyRequest<{ Body: CreateAttemptDTO }>, reply: FastifyReply) {
    const attempt = await this.attemptService.create(request.body);
    return reply.status(201).send(attempt);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const attempts = await this.attemptService.list();
    return reply.send(attempts);
  }

  async findById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const attempt = await this.attemptService.findById(request.params.id);
    return reply.send(attempt);
  }

  async update(
    request: FastifyRequest<{ Params: { id: string }; Body: UpdateAttemptDTO }>,
    reply: FastifyReply,
  ) {
    const attempt = await this.attemptService.update(request.params.id, request.body);
    return reply.send(attempt);
  }

  async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.attemptService.delete(request.params.id);
    return reply.status(204).send();
  }
}
