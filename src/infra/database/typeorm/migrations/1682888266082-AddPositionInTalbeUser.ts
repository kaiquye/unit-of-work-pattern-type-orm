import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPositionInTalbeUser1682888266082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tb_user',
      new TableColumn({
        name: 'position',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
