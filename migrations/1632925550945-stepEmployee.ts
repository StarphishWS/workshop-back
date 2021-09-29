import {MigrationInterface, QueryRunner} from "typeorm";

export class stepEmployee1632925550945 implements MigrationInterface {
    name = 'stepEmployee1632925550945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`employee\` ADD \`step\` enum ('none', 'click', 'form') NOT NULL DEFAULT 'none'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`employee\` DROP COLUMN \`step\``);
    }

}
