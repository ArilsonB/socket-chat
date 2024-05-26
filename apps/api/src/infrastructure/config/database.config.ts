import { isDevelopment } from '@api/shared/constants/environment';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { SqliteMikroORM } from '@mikro-orm/sqlite/SqliteMikroORM';

const databaseConfig: MikroOrmModuleOptions = {
  entities: ['dist/**/*.entity{.ts,.js}'],
  entitiesTs: ['src/**/*.entity{.ts,.js}'],
  dbName: 'database.sqlite',
  debug: isDevelopment,
  driver: SqliteDriver,
};

export default databaseConfig;
