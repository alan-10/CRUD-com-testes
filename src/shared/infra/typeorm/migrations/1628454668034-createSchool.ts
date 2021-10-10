import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSchool1628454668034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "school",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name:'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("school");
  }
}
