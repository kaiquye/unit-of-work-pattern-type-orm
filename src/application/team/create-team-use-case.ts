import { UseCaseAdapter } from '../../domain/adapters/use-case-adapter';
import { ICreateTeamIn, ICreateTeamOut } from './interfaces/team-interfaces';
import { autoInjectable, inject } from 'tsyringe';
import { ITeamRepository } from '../../infra/database/typeorm/repositories/interfaces/team-repository-interface';
import { FindManagerByPositionUseCase } from '../manager/find-manager-by-position-use-case';
import { TeamMapper } from '../../domain/mapper/team-mapper';

@autoInjectable()
export class CreateTeamUseCase extends UseCaseAdapter<
  ICreateTeamIn,
  Promise<ICreateTeamOut>
> {
  constructor(
    @inject('team-repository')
    private teamRep: ITeamRepository,
    @inject('find-manager-use-case')
    private findManagerUseCase: FindManagerByPositionUseCase,
  ) {
    super();
  }
  async execute(data: ICreateTeamIn): Promise<ICreateTeamOut> {
    const userManager = await this.findManagerUseCase.execute({
      id: data.created_by,
    });
    if (userManager) {
      const team = TeamMapper.toModel(data);
      const created = await this.teamRep.save(team);
      return TeamMapper.toView(created);
    }
  }
}
