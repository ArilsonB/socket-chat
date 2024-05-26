import { Provider } from '@nestjs/common';

export const databaseProviders: Provider[] = [
  {
    provide: 'DB_PROVIDER',
    useFactory: async (): Promise<any> => await {},
  },
];
