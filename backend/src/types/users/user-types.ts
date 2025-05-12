export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = {
  name?: string;
  email?: string;
  password?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
