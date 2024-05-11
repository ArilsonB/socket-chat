import { EntityRepository } from '@mikro-orm/core';
import { Room } from './room.entity';

export class RoomRepository extends EntityRepository<Room> {
  // your custom methods...
}
