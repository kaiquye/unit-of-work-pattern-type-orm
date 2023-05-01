import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateUserTable1682799897491 } from './migrations/1682799897491-CreateUserTable';
import { CreateTableDocuments1682800439611 } from './migrations/1682800439611-CreateTableDocuments';
import { CreateTeamTable1682801625889 } from './migrations/1682801625889-CreateTeamTable';
import { CreateMessagesTable1682801702491 } from './migrations/1682801702491-CreateMessagesTable';
import { AlterTableMessageAddFk1682804040795 } from './migrations/1682804040795-AlterTableMessageAddFk';
import { AlterTableUserAddPassword1682807864560 } from './migrations/1682807864560-AlterTableUserAddPassword';
import { Document } from '../../../domain/models/document.model';
import { Team } from '../../../domain/models/team.model';
import { User } from '../../../domain/models/user.model';
import { Message } from '../../../domain/models/message.model';
import { AddPositionInTalbeUser1682888266082 } from './migrations/1682888266082-AddPositionInTalbeUser';
import { AddTeamIdInUserTable1682892560083 } from './migrations/1682892560083-AddTeamIdInUserTable';
import { AddColunsUserTable1682892858680 } from './migrations/1682892858680-AddColunsUserTable';
import { ALterPasswordColumn1682902884905 } from './migrations/1682902884905-ALterPasswordColumn';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'Phoenix',
  migrations: [
    CreateUserTable1682799897491,
    CreateTableDocuments1682800439611,
    CreateTeamTable1682801625889,
    CreateMessagesTable1682801702491,
    AlterTableMessageAddFk1682804040795,
    AlterTableUserAddPassword1682807864560,
    AddPositionInTalbeUser1682888266082,
    AddTeamIdInUserTable1682892560083,
    AddColunsUserTable1682892858680,
    ALterPasswordColumn1682902884905,
  ],
  entities: [Document, Team, User, Message],
});

export const queryRunner = AppDataSource.createQueryRunner();
export const databaseConn = queryRunner.manager;
