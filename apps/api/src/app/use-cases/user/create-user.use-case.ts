import { User } from '@api/core/domain/entities/user.entity';
import { UserCase } from '../../../core/base/use-case';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@api/core/repositories/user.repository';

@Injectable()
export class CreateUserUseCase implements UserCase<any, any> {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const user = new User();

    user.name = 'João';

    const response = this.userRepository.create(user);

    return response;
  }
}
