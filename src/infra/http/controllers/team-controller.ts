import { CreateTeamDto } from '../DTOs/create-team-dto';
import { IHttpResponse } from '../../../domain/adapters/interceptor-adapter';
import { autoInjectable, container } from 'tsyringe';
import { CreateTeamUseCase } from '../../../application/team/create-team-use-case';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

@autoInjectable()
class controller {
  constructor(private createTeam: CreateTeamUseCase) {}
  public async create(data: CreateTeamDto): Promise<IHttpResponse> {
    const result = await this.createTeam.execute(data);
    return new IHttpResponse({ status: EStatusCode.Created, json: result });
  }
}

export const teamController = container.resolve(controller);
