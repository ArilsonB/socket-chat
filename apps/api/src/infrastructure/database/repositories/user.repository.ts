import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/sqlite';
import { User } from '@api/core/domain/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async create(user: User): Promise<User> {
    await this.userRepository.insert(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User | null> {
    // return this.userRepository.findOne({ id });
    return null;
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const existingUser = await this.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }

    Object.assign(existingUser, user);
    await this.userRepository.upsert();
    return existingUser;
  }

  async delete(id: string): Promise<void> {
    const user = await this.findById(id);
    if (user) {
      // await this.userRepository.(user);
    }
  }
}
