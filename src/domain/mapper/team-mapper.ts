import { Team } from '../models/team.model';

export class TeamMapper {
  static toModel(data: Partial<Team>) {
    const team = new Team();
    team.name = data.name;
    team.id = data.id;
    team.created_at = data.created_at;
    team.updated_at = data.updated_at;
    return team;
  }

  static toView(data: Partial<Team>) {
    const team = new Team();
    team.name = data.name;
    team.id = data.id;
    return team;
  }
}
