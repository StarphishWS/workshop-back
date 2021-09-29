import {MigrationInterface, QueryRunner} from "typeorm";

export class initDB1632905805416 implements MigrationInterface {
    name = 'initDB1632905805416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workshop_db\`.\`user\` (\`id\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`workshop_db\`.\`campaign\` (\`id\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`date\` datetime NOT NULL, \`template\` varchar(255) NOT NULL, \`sent\` tinyint NOT NULL, \`userId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` ADD CONSTRAINT \`FK_8e2dc400e55e237feba0869bc02\` FOREIGN KEY (\`userId\`) REFERENCES \`workshop_db\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` DROP FOREIGN KEY \`FK_8e2dc400e55e237feba0869bc02\``);
        await queryRunner.query(`DROP TABLE \`workshop_db\`.\`campaign\``);
        await queryRunner.query(`DROP TABLE \`workshop_db\`.\`user\``);
    }

}
