import { isDevelopment } from '@api/shared/constants/environment';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const databaseConfig: MikroOrmModuleOptions = {
  entities: ['dist/**/*.entity{.ts,.js}'],
  entitiesTs: ['src/**/*.entity{.ts,.js}'],
  dbName: 'database.sqlite',
  debug: isDevelopment,
};

export default databaseConfig;
