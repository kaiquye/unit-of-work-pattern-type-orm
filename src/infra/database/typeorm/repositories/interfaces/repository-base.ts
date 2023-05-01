import { databaseConn } from '../../connection';
import { EntityManager } from 'typeorm';

export abstract class RepositoryBase {
  protected databaseConn: EntityManager;
  constructor() {
    this.databaseConn = databaseConn;
  }
}
