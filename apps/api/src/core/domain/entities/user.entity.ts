import { Entity } from '@api/core/base/entity';

export class User extends Entity {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
