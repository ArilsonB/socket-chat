import { Module } from '@nestjs/common'
import { databaseProviders } from './database.provider'
import { MikroOrmModule } from '@mikro-orm/nestjs';
import databaseConfig from '../config/database.config';
import { User } from '@api/core/domain/entities/user/user.entity';

@Module({
  imports: [MikroOrmModule.forRoot(databaseConfig)],
  providers: [...databaseProviders],
  exports: [MikroOrmModule, ...databaseProviders],
})
export class DatabaseModule {}
