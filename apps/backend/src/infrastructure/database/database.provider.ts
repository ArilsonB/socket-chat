export const databaseProviders = [
  {
    provide: 'DB_PROVIDER',
    useFactory: async (): Promise<any> => await {},
  },
]
