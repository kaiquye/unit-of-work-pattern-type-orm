import { ITeamRepository } from './interfaces/team-repository-interface';
import { Team } from '../../../../domain/models/team.model';

export class TeamRepository extends ITeamRepository {
  async save(data: Team): Promise<Team> {
    return this.databaseConn.save(data);
  }

  findById(id): Promise<Team> {
    return this.databaseConn.findOne(Team, {
      where: {
        id,
      },
    });
  }
}
