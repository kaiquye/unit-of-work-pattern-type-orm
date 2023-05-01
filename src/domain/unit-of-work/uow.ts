import { queryRunner } from '../../infra/database/typeorm/connection';

export class Uow {
  static async startTrans() {
    await queryRunner.startTransaction();
  }
  static async commit() {
    await queryRunner.commitTransaction();
  }
  static async rollback() {
    await queryRunner.rollbackTransaction();
  }
}
