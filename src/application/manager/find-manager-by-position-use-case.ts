import { UseCaseAdapter } from '../../domain/adapters/use-case-adapter';
import { IFindManagerByIdIn } from './interfaces/manager-interfaces';
import { User } from '../../domain/models/user.model';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../infra/database/typeorm/repositories/interfaces/user-repository-interface';
import { ManagerNotFoundError } from './errors/manager-not-found-error';
import { EUserRoles } from '../../domain/enums/user-roles-enum';
import { InformedUserIsNotAManagerError } from './errors/informed-user-is-not-a-manager-error';

@injectable()
export class FindManagerByPositionUseCase extends UseCaseAdapter<
  IFindManagerByIdIn,
  Promise<User>
> {
  constructor(
    @inject('user-repository')
    private readonly userRep: IUserRepository,
  ) {
    super();
  }
  async execute(data: IFindManagerByIdIn): Promise<User> {
    const userManager = await this.userRep.findById(data.id);
    if (!userManager) {
      throw new ManagerNotFoundError();
    }
    if (userManager.position !== EUserRoles.namager) {
      throw new InformedUserIsNotAManagerError();
    }
    return userManager;
  }
}
