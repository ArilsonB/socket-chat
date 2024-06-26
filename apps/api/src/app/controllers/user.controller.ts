import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '@api/core/usecase/create-user.use-case';
import { CreateUserDto } from '@api/shared/dtos/user/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async findAll() {

    return 'Olá';
    // return this.createUserUseCase.findAll();
  }
}
