import { Module } from '@nestjs/common'
import { DatabaseModule } from '@api/infrastructure/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './core/interceptors/logger.interceptor';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { UserModule } from './app/modules/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.register(),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class AppModule {}
