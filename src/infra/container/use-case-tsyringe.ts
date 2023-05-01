import { container } from 'tsyringe';
import { CreateTeamUseCase } from '../../application/team/create-team-use-case';
import { FindManagerByPositionUseCase } from '../../application/manager/find-manager-by-position-use-case';
import { CreateDocumentUseCase } from '../../application/document/create-document-use-case';
import { FindTeamByIdUseCase } from '../../application/team/find-team-by-id-use-case';

container.registerSingleton(
  'find-manager-use-case',
  FindManagerByPositionUseCase,
);
container.registerSingleton('create-document-use-case', CreateDocumentUseCase);

container.registerSingleton('CreateTeamUseCase', CreateTeamUseCase);
container.registerSingleton('find-team-by-id-use-case', FindTeamByIdUseCase);
