import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeTemplate1632919308171 implements MigrationInterface {
    name = 'ChangeTypeTemplate1632919308171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` DROP COLUMN \`template\``);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` ADD \`template\` enum ('google') NOT NULL DEFAULT 'google'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` DROP COLUMN \`template\``);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`campaign\` ADD \`template\` varchar(255) NOT NULL`);
    }

}
