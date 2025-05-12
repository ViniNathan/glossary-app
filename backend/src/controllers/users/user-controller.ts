import type { FastifyReply, FastifyRequest } from "fastify";

import type { CreateUserDTO, UpdateUserDTO } from "../../types/users/user-types";

import { UserService } from "../../services/users/user-service";

export class UserController {
  constructor(private userService = new UserService()) {}

  async create(request: FastifyRequest<{ Body: CreateUserDTO }>, reply: FastifyReply) {
    const user = await this.userService.create(request.body);
    return reply.status(201).send(user);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const users = await this.userService.list();
    return reply.send(users);
  }

  async findById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const user = await this.userService.findById(request.params.id);
    return reply.send(user);
  }

  async update(
    request: FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>,
    reply: FastifyReply,
  ) {
    const user = await this.userService.update(request.params.id, request.body);
    return reply.send(user);
  }

  async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.userService.delete(request.params.id);
    return reply.status(204).send();
  }
}
