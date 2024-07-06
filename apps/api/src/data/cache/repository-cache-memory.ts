import { Entity } from '@api/core/base/entity';
import { Repository } from '@api/core/base/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositoryCacheMemory<
  TEntity extends Entity,
> extends Repository<TEntity> {
  protected readonly items: TEntity[];

  constructor() {
    super();
    this.items = [];
  }

  public create(data: TEntity): TEntity {
    const lastItem = this.items.length > 0 ? this.items.slice(-1)[0] : null;

    data.id = lastItem ? lastItem.id + 1 : 1;

    const count = this.items.push(data);

    return this.items[count - 1];
  }

  public update(id: number, data: TEntity): TEntity {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser atualizado
    }

    this.items[index] = data;

    return this.items[index];
  }

  public patch(id: number, data: Partial<TEntity>): TEntity {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser atualizado
    }

    for (const key in data) {
      this.items[index][key] = data[key] as TEntity[Extract<
        keyof TEntity,
        string
      >];
    }

    return this.items[index];
  }

  public getById(id: number): TEntity {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      return item;
    } else {
      throw new Error(`Item with id ${id} not found`);
    }
  }

  public getAll(): TEntity[] {
    return this.items;
  }

  public getOne(filter: Partial<TEntity>): TEntity {
    return this.getMany(filter).map((item) => {
      if (item) {
        return item;
      } else {
        throw new Error('Item not found');
      }
    })[0];
  }

  public getMany(filter: Partial<TEntity>): TEntity[] {
    let filtered = this.items;

    for (const key in filter) {
      filtered = filtered.filter((item) => item[key] === filter[key]);
    }

    return filtered;
  }

  public delete(id: number): void {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser deletado
    }

    this.items.splice(index, 1);
  }

  private getIndexById(id: number) {
    return this.items.findIndex((item) => item.id === id);
  }
}
