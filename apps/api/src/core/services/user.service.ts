import { Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user-repository.interface';
import { User } from '../domain/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
