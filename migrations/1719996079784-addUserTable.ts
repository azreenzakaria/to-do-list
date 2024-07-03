import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserTable1719996079784 implements MigrationInterface {
    name = 'AddUserTable1719996079784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`username\` varchar(128) NOT NULL, \`email\` varchar(128) NOT NULL, \`refresh_token\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
