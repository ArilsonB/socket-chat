import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserController } from '../controllers/user.controller';
// import { CreateUserUseCase } from '../core/use-cases/create-user.use-case';
// import { FindAllUsersUseCase } from '../core/use-cases/find-all-users.use-case';
import { User } from '../../core/domain/entities/user/user.entity';
import { UserRepository } from '@api/infrastructure/database/repositories';
import { UserService } from '@api/core/services/user.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]), // Importa a entidade User para o MikroORM
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
