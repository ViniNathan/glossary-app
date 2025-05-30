export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  xp: number;
  lives: number;
}

export interface UpdateUserDTO {
  name: string;
  email: string;
  password: string;
  newPassword?: string;
  confirmNewPassword?: string;
  newName?: string;
  newEmail?: string;
  confirmNewEmail?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
