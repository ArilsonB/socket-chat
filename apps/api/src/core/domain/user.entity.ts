import { Entity, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @Property({ primary: true })
  id: number;

  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
  ) {}
}
