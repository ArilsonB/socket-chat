import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './infra/interceptors/logger.interceptor';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache/users-cache-memory-repository';
import { UserController } from './infra/controllers/user.controller';
import { GetUsersUseCase } from './app/use-cases/user/get-users.use-case';
import { CreateUserUseCase } from './app/use-cases/user';
import { SocketService } from './app/services/socket.service';
import { SocketGateway } from './infra/gateways/socket.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.register(),
  ],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUsersUseCase,
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    SocketService,
    SocketGateway,
  ],
})
export class AppModule {}
