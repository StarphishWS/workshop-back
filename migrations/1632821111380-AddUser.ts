import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1632821111380 implements MigrationInterface {
    name = 'AddUser1632821111380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workshop_db\`.\`user\` (\`id\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`workshop_db\`.\`user\``);
    }

}
