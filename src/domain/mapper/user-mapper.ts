import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export class UserMapper {
  static toModel(data: Partial<User>) {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.position = data.position;
    user.password = data.password;
    user.team_id = data.team_id;
    user.id = data.id;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    return user;
  }

  static toView(data: Partial<Team>) {}
}
