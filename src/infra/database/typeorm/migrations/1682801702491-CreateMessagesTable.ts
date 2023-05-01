import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMessagesTable1682801702491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_message',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'message',
            type: 'varchar',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'team_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tb_message',
      new TableForeignKey({
        name: 'fK_user_id',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tb_user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'tb_message',
      new TableForeignKey({
        name: 'fK_team_id',
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tb_team',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_message');
  }
}
