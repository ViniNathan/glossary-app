import type { endSession, getSession, startSession } from "../../types/sessions/session-types";

import { SessionRepository } from "../../repositories/sessions/session-repository";
import { AppError } from "../../utils/errors/app-error";

export class SessionService {
  constructor(private sessionRepository = new SessionRepository()) {}

  async startSession(data: startSession) {
    return this.sessionRepository.startSession(data);
  }

  async endSession(data: endSession) {
    return this.sessionRepository.endSession(data);
  }

  async getSession(data: getSession) {
    const session = await this.sessionRepository.getSession(data);
    if (!session) {
      throw new AppError("Sessão não encontrada", 404);
    }
    return session;
  }
}

export default SessionService;
