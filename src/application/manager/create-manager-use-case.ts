import { UseCaseAdapter } from '../../domain/adapters/use-case-adapter';
import { ICreateManagerIn } from './interfaces/manager-interfaces';
import { User } from '../../domain/models/user.model';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../infra/database/typeorm/repositories/interfaces/user-repository-interface';
import { EmailAlreadyRegisteredError } from './errors/email-already-registered.error';
import { FindManagerByPositionUseCase } from './find-manager-by-position-use-case';
import { UserMapper } from '../../domain/mapper/user-mapper';
import { CreateDocumentUseCase } from '../document/create-document-use-case';
import { Uow } from '../../domain/unit-of-work/uow';
import { FindTeamByIdUseCase } from '../team/find-team-by-id-use-case';
import { EUserRoles } from '../../domain/enums/user-roles-enum';
import PasswordHashUtil from '../../infra/utils/password-hash-util';

@injectable()
export class CreateManagerUseCase extends UseCaseAdapter<
  ICreateManagerIn,
  Promise<User>
> {
  constructor(
    @inject('user-repository')
    private readonly userRep: IUserRepository,
    @inject('find-manager-use-case')
    private findManagerOrFailUseCase: FindManagerByPositionUseCase,
    @inject('create-document-use-case')
    private createDocumentOrFailUseCase: CreateDocumentUseCase,
    @inject('find-team-by-id-use-case')
    private findTeamByIdUseCase: FindTeamByIdUseCase,
  ) {
    super();
  }
  async execute(data: ICreateManagerIn): Promise<User> {
    const [managerExists, teamExists] = await Promise.all([
      this.findManagerOrFailUseCase.execute({
        id: data.created_by,
      }),
      this.findTeamByIdUseCase.execute({
        id: data.team_id,
      }),
    ]);

    if (managerExists && teamExists) {
      const emailAlreadyRegistered = await this.userRep.findByEmail(data.email);
      if (emailAlreadyRegistered) {
        throw new EmailAlreadyRegisteredError();
      }

      await Uow.startTrans();
      data.password = await PasswordHashUtil.generate(data.password);
      const userMapper = UserMapper.toModel({
        ...data,
        position: EUserRoles.namager,
      });
      const createdManager = await this.userRep.save(userMapper);

      try {
        await this.createDocumentOrFailUseCase.execute({
          document: data.document,
          document_type: data.document_type,
          user_id: createdManager.id,
        });
      } catch (createDocumentException) {
        await Uow.rollback();
        throw createDocumentException;
      }

      await Uow.commit();
      return createdManager;
    }
  }
}
