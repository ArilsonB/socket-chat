import { CreateUserUseCase } from '@api/app/use-cases/user';
import { GetUsersUseCase } from '@api/app/use-cases/user/get-users.use-case';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getUsersUseCase.execute();
  }

  @Post()
  create() {
    return this.createUserUseCase.execute();
  }
}
