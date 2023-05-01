import { Team } from '../../../../../domain/models/team.model';
import { RepositoryBase } from './repository-base';

export abstract class ITeamRepository extends RepositoryBase {
  abstract save(data: Team): Promise<Team>;
  abstract findById(id: string): Promise<Team>;
}
