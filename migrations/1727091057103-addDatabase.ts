import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDatabase1727091057103 implements MigrationInterface {
    name = 'AddDatabase1727091057103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`username\` varchar(128) NOT NULL, \`email\` varchar(128) NOT NULL, \`refresh_token\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`name\` varchar(128) NOT NULL, \`is_completed\` tinyint NOT NULL, \`task_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`name\` varchar(128) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_414f1de37bf958ffebd34495cf9\` FOREIGN KEY (\`task_id\`) REFERENCES \`task\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_414f1de37bf958ffebd34495cf9\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
