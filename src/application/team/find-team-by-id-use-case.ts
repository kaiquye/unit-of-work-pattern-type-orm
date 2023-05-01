import { UseCaseAdapter } from '../../domain/adapters/use-case-adapter';
import { autoInjectable, inject } from 'tsyringe';
import { ITeamRepository } from '../../infra/database/typeorm/repositories/interfaces/team-repository-interface';
import { IFindTeamByIdIn } from './interfaces/team-interfaces';
import { Team } from '../../domain/models/team.model';
import { TeamNotFoundError } from './errors/team-not-found-error';

@autoInjectable()
export class FindTeamByIdUseCase extends UseCaseAdapter<
  IFindTeamByIdIn,
  Promise<Team>
> {
  constructor(
    @inject('team-repository')
    private teamRep: ITeamRepository,
  ) {
    super();
  }
  async execute(data: IFindTeamByIdIn): Promise<Team> {
    const team = await this.teamRep.findById(data.id);
    if (team) {
      return team;
    }
    throw new TeamNotFoundError();
  }
}
