import { Observable } from 'rxjs';
import { Repository } from '../base/repository';
import { User } from '../domain/entities/user.entity';

export abstract class UserRepository extends Repository<User> {}
