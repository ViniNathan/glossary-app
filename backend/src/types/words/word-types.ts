export interface CreateWordDTO {
  english_word: string;
  portuguese_translation: string;
  difficulty_level: string;
};

export interface UpdateWordDTO {
  english_word?: string;
  portuguese_translation?: string;
  difficulty_level?: string;
};

export interface Word {
  id: string;
  english_word: string;
  portuguese_translation: string;
  difficulty_level: string;
};
