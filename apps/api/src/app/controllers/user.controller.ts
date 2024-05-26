import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '@api/core/use-cases/create-user.use-case';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async findAll() {
    return this.createUserUseCase.findAll();
  }
}
