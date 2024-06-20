import { Injectable } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { CreateUserDto } from '@api/shared/dtos/user/create-user.dto';
import { User } from '../../domain/entities/user/user.entity';

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserDto, User> {
  constructor(private readonly userService: UserService) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
    return this.userService.createUser(user);
  }
}
