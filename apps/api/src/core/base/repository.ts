export abstract class Repository<TEntity> {
  abstract create(data: TEntity): TEntity;
  abstract update(id: number, data: TEntity): TEntity;
  abstract patch(id: number, data: Partial<TEntity>): TEntity;
  abstract getById(id: number): TEntity;
  abstract getAll(): TEntity[] | TEntity;
  abstract getOne(filter: Partial<TEntity>): TEntity;
  abstract getMany(filter: Partial<TEntity>): TEntity[] | TEntity;
  abstract delete(id: number): void | TEntity;
}
