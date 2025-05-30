import type { FastifyReply, FastifyRequest } from "fastify";

import bcrypt from "bcrypt";

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
    const { id } = request.params;
    const data = request.body;

    // Buscar usuário existente
    const existingUser = await this.userService.findById(id);

    // Validar senha atual
    if (!await bcrypt.compare(data.password, existingUser.password)) {
      return reply.status(401).send({
        message: "Senha atual inválida",
        error: "Invalid password",
      });
    }

    // Preparar dados para atualização
    const updateData: any = {};

    // Validar e atualizar nome
    if (data.newName && data.newName !== data.name) {
      updateData.name = data.newName;
    }

    // Validar e atualizar email
    if (data.newEmail && data.newEmail !== data.email) {
      if (data.newEmail !== data.confirmNewEmail) {
        return reply.status(400).send({
          message: "Confirmação de email não confere",
          error: "Email confirmation mismatch",
        });
      }
      updateData.email = data.newEmail;
    }

    // Validar e atualizar senha
    if (data.newPassword) {
      if (data.newPassword !== data.confirmNewPassword) {
        return reply.status(400).send({
          message: "Confirmação de senha não confere",
          error: "Password confirmation mismatch",
        });
      }

      if (data.newPassword.length < 6) {
        return reply.status(400).send({
          message: "Nova senha deve ter pelo menos 6 caracteres",
          error: "Password too short",
        });
      }

      if (data.newPassword === data.password) {
        return reply.status(400).send({
          message: "Nova senha deve ser diferente da atual",
          error: "Same password",
        });
      }

      updateData.password = await bcrypt.hash(data.newPassword, 10);
    }

    // Verificar se há algo para atualizar
    if (Object.keys(updateData).length === 0) {
      return reply.status(400).send({
        message: "Nenhuma alteração válida fornecida",
        error: "No valid changes",
      });
    }

    const updatedUser = await this.userService.update(id, updateData);
    return reply.send({
      message: "Usuário atualizado com sucesso",
      user: updatedUser,
    });
  }

  async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.userService.delete(request.params.id);
    return reply.status(204).send();
  }
}
