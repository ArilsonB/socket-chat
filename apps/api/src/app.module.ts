import { Module } from '@nestjs/common'
import { DatabaseModule } from '@api/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
