import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1632903457530 implements MigrationInterface {
    name = 'AddUser1632903457530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` ADD \`userId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` ADD CONSTRAINT \`FK_8e2dc400e55e237feba0869bc02\` FOREIGN KEY (\`userId\`) REFERENCES \`workshop_db\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` DROP FOREIGN KEY \`FK_8e2dc400e55e237feba0869bc02\``);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` DROP COLUMN \`userId\``);
    }

}
