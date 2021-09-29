import {MigrationInterface, QueryRunner} from "typeorm";

export class employee1632920366464 implements MigrationInterface {
    name = 'employee1632920366464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workshop_db\`.\`employee\` (\`id\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`campaignId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`employee\` ADD CONSTRAINT \`FK_422903cfd29c7ae96951fdb2d2b\` FOREIGN KEY (\`campaignId\`) REFERENCES \`workshop_db\`.\`campaign\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workshop_db\`.\`employee\` DROP FOREIGN KEY \`FK_422903cfd29c7ae96951fdb2d2b\``);
        await queryRunner.query(`DROP TABLE \`workshop_db\`.\`employee\``);
    }

}
