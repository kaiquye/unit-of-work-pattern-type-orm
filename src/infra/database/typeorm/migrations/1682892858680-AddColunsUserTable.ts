import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColunsUserTable1682892858680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tb_user',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.addColumn(
      'tb_user',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
