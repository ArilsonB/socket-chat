import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  Property,
} from '@mikro-orm/core';

// @Entity({ repository: () => RoomRepository })
export class Room {
  @Property({ primary: true, index: true })
  id: number;

  @Property()
  name: string;

  // @ManyToOne()
  // createdBy: Room;
  //
  // [EntityRepositoryType]?: RoomRepository;
}
