export interface CreateAttemptDTO {
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface UpdateAttemptDTO {
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
  updatedAt: Date;
}

export interface Attempt {
  id: string;
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
  createdAt: Date;
  updatedAt: Date;
}
