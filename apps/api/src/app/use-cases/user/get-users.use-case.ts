import { User } from '@api/core/domain/entities/user.entity';
import { UserCase } from '../../../core/base/use-case';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@api/core/repositories/user.repository';

@Injectable()
export class GetUsersUseCase implements UserCase<any, any> {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const response = this.userRepository.getAll();

    return response;
  }
}
