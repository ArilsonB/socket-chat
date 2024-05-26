import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../../core/services/user.service';
import { UserRepositoryImpl } from '../../infrastructure/database/repositories/user.repository';
// import { CreateUserUseCase } from '../core/use-cases/create-user.use-case';
// import { FindAllUsersUseCase } from '../core/use-cases/find-all-users.use-case';
import { User } from '../../core/domain/user.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]), // Importa a entidade User para o MikroORM
  ],
  controllers: [UserController],
  providers: [
    { provide: 'UserRepository', useClass: UserRepositoryImpl },
    UserService,
    // CreateUserUseCase,
    // FindAllUsersUseCase,
  ],
  exports: [UserService],
})
export class UserModule {}
