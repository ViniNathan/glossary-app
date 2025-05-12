import { UserRepository } from '../../repositories/users/user-repository'
import { CreateUserDTO, UpdateUserDTO } from '../../types/users/user-types'
import { AppError } from '../../utils/errors/app-error'

export class UserService {
  constructor(private userRepository = new UserRepository()) {}

  async create(data: CreateUserDTO) {
    const userExists = await this.userRepository.findByEmail(data.email)
    if (userExists) {
      throw new AppError('Email já cadastrado', 400)
    }
    return this.userRepository.create(data)
  }

  async list() {
    return this.userRepository.list()
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id)
    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }
    return user
  }

  async update(id: string, data: UpdateUserDTO) {
    await this.findById(id)
    return this.userRepository.update(id, data)
  }

  async delete(id: string) {
    await this.findById(id)
    await this.userRepository.delete(id)
  }
}