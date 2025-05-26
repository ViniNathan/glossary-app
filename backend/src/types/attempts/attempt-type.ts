export interface CreateAttemptDTO {
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
}

export interface UpdateAttemptDTO {
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
}

export interface Attempt {
  id: string;
  sessionId: string;
  wordId: string;
  translation_method: string;
  is_correct: boolean;
}
