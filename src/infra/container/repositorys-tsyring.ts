import { container } from 'tsyringe';
import { TeamRepository } from '../database/typeorm/repositories/team-repository';
import { ITeamRepository } from '../database/typeorm/repositories/interfaces/team-repository-interface';
import { IUserRepository } from '../database/typeorm/repositories/interfaces/user-repository-interface';
import { UserRepository } from '../database/typeorm/repositories/user-repository';
import { DocumentRepository } from '../database/typeorm/repositories/document-repository';
import { IDocumentRepository } from '../database/typeorm/repositories/interfaces/document-repository-interface';

container.registerSingleton<ITeamRepository>('team-repository', TeamRepository);
container.registerSingleton<IUserRepository>('user-repository', UserRepository);
container.registerSingleton<IDocumentRepository>(
  'document-repository',
  DocumentRepository,
);
