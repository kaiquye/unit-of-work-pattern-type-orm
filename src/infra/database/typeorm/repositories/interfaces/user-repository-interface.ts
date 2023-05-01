import { User } from '../../../../../domain/models/user.model';
import { RepositoryBase } from './repository-base';

export abstract class IUserRepository extends RepositoryBase {
  abstract save(data: User): Promise<User>;
  abstract findById(id): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
}
