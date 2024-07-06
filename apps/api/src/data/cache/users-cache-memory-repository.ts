import { User } from '@api/core/domain/entities/user.entity';
import { RepositoryCacheMemory } from './repository-cache-memory';
import { UserRepository } from '@api/core/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<User>
  implements UserRepository {}
