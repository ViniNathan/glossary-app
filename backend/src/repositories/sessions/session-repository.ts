import type { endSession, getSession, startSession } from "../../types/sessions/session-types";

import { PrismaClient } from "../../generated/prisma";

export class SessionRepository {
  constructor(private prisma = new PrismaClient()) {}

  async startSession(data: startSession) {
    return this.prisma.session.create({
      data: {
        userId: data.userId,
        start_time: new Date(data.start_time),
        lives_remaining: data.lives_remaining,
        xp_earned: 0, // Valor inicial
      },
    });
  }

  async endSession(data: endSession) {
    return this.prisma.session.update({
      where: { id: data.sessionId },
      data: {
        end_time: new Date(data.end_time),
        lives_remaining: data.lives_remaining,
        xp_earned: data.xp_earned,
      },
    });
  }

  async getSession(data: getSession) {
    return this.prisma.session.findUnique({
      where: { id: data.sessionId },
    });
  }
}
