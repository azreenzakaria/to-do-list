import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDatabase1723038833711 implements MigrationInterface {
    name = 'AddDatabase1723038833711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`title\` varchar(128) NOT NULL, \`description\` varchar(128) NULL, \`priority\` varchar(128) NOT NULL, \`is_done\` tinyint NOT NULL, \`due_date\` varchar(255) NULL, \`remarks\` varchar(128) NULL, \`project_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`title\` varchar(128) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_by\` varchar(50) NOT NULL, \`created_date_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modified_by\` varchar(50) NULL, \`updated_date_time\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_by\` varchar(50) NULL, \`deleted_date_time\` datetime(6) NULL, \`username\` varchar(128) NOT NULL, \`email\` varchar(128) NOT NULL, \`refresh_token\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD CONSTRAINT \`FK_7f8cdb1c5d2d2068dd89a0d4ea2\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` DROP FOREIGN KEY \`FK_7f8cdb1c5d2d2068dd89a0d4ea2\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}
