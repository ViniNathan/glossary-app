import type { FastifyReply, FastifyRequest } from "fastify";

import type { endSession, startSession } from "../../types/sessions/session-types";

import { SessionService } from "../../services/sessions/session-service";

export class SessionController {
  constructor(private sessionService = new SessionService()) {}

  async startSession(request: FastifyRequest<{ Body: startSession }>, reply: FastifyReply) {
    const sessionData = request.body;
    const session = await this.sessionService.startSession(sessionData);

    return reply.status(201).send({ message: "Sessão iniciada com sucesso", session });
  }

  async getSession(request: FastifyRequest<{ Params: { sessionId: string } }>, reply: FastifyReply) {
    const { sessionId } = request.params;
    const session = await this.sessionService.getSession({ sessionId });

    if (!session) {
      return reply.status(404).send({ message: "Sessão não encontrada", error: "Não encontrada" });
    }

    return reply.send({ message: "Sessão recuperada com sucesso", session });
  }

  async endSession(request: FastifyRequest<{ Body: endSession }>, reply: FastifyReply) {
    const sessionData = request.body;
    const result = await this.sessionService.endSession(sessionData);

    if (!result) {
      return reply.status(404).send({ message: "Sessão não encontrada", error: "Não encontrada" });
    }

    return reply.send({ message: "Sessão encerrada com sucesso" });
  }
}
