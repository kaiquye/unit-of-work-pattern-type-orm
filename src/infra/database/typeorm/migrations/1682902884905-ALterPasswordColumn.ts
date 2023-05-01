import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ALterPasswordColumn1682902884905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'tb_user',
      new TableColumn({
        name: 'password',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'tb_user',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
