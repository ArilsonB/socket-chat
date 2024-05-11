import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { RoomRepository } from './room.repository';

@Entity({ repository: () => RoomRepository })
export class Room {
  @Property({ primary: true, index: true })
  id: number;

  @Property()
  name: string;

  @ManyToOne()
  created_by: Room;

  [EntityRepositoryType]?: RoomRepository;
}
