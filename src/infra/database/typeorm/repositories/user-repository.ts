import { IUserRepository } from './interfaces/user-repository-interface';
import { User } from '../../../../domain/models/user.model';
export class UserRepository extends IUserRepository {
  save(data: User): Promise<User> {
    return this.databaseConn.save(User, data);
  }

  findById(id): Promise<User> {
    return this.databaseConn.findOne(User, {
      where: {
        id,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.databaseConn.findOne(User, {
      where: {
        email,
      },
    });
  }
}
