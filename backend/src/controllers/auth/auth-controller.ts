import type { FastifyReply, FastifyRequest } from "fastify";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import type { LoginBody, RefreshTokenBody, RegisterBody } from "../../types/auth/auth-types";

import { UserService } from "../../services/users/user-service";

export class AuthController {
  constructor(private userService = new UserService()) {}

  async register(request: FastifyRequest<{ Body: RegisterBody }>, reply: FastifyReply) {
    const { name, email, password, confirmPassword } = request.body;

    if (password !== confirmPassword) {
      return reply.status(400).send({ message: "Passwords do not match", error: "Bad Request" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.create({ name, email, password: hashedPassword, xp: 0, lives: 5 });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    return reply.status(201).send({ message: "User registered successfully", user, token });
  }

  async login(request: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) {
    const { email, password } = request.body;
    const user = await this.userService.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ message: "Invalid email or password", error: "Unauthorized" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    return reply.send({ message: "Login successful", user, token });
  }

  async refreshToken(request: FastifyRequest<{ Body: RefreshTokenBody }>, reply: FastifyReply) {
    const { refreshToken } = request.body;

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!) as { id: string };
      const user = await this.userService.findById(decoded.id);

      if (!user) {
        return reply.status(401).send({ message: "Invalid refresh token", error: "Unauthorized" });
      }

      const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

      return reply.send({ message: "Token refreshed successfully", token: newToken });
    }
    catch (error: any) {
      return reply.status(401).send({ message: "Invalid refresh token", error: `Unauthorized: ${error.message}` });
    }
  }

  async validate(request: FastifyRequest, reply: FastifyReply) {
    try {
      const authHeader = request.headers.authorization;
      const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

      if (!token) {
        return reply.status(401).send({
          valid: false,
          message: "Token de acesso requerido",
          error: "ACCESS_TOKEN_REQUIRED",
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
      const user = await this.userService.findById(decoded.id);

      if (!user) {
        return reply.status(401).send({
          valid: false,
          message: "Usuário não encontrado",
          error: "USER_NOT_FOUND",
        });
      }

      return reply.send({
        valid: true,
        message: "Token válido",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          xp: user.xp,
          lives: user.lives,
        },
      });
    }
    catch (error: any) {
      return reply.status(403).send({
        valid: false,
        message: "Token inválido",
        error: `INVALID_TOKEN: ${error.message}`,
      });
    }
  }
}
