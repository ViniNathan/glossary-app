export interface startSession {
  userId: string;
  start_time: string;
  lives_remaining: number;
}

export interface endSession {
  sessionId: string;
  end_time: string;
  lives_remaining: number;
  xp_earned: number;
}

export interface getSession {
  sessionId: string;
}
