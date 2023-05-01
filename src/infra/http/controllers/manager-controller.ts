import { IHttpResponse } from '../../../domain/adapters/interceptor-adapter';
import { autoInjectable, container } from 'tsyringe';
import { EStatusCode } from '../../../domain/enums/status-code-enums';
import { CreateManagerDto } from '../DTOs/create-manager-dto';
import { CreateManagerUseCase } from '../../../application/manager/create-manager-use-case';

@autoInjectable()
class controller {
  constructor(private createManager: CreateManagerUseCase) {}
  public async create(data: CreateManagerDto, params): Promise<IHttpResponse> {
    const body = Object.assign({ ...data, created_by: params.created_by });
    const result = await this.createManager.execute(body);
    return new IHttpResponse({ status: EStatusCode.Created, json: result });
  }
}

export const managerController = container.resolve(controller);
