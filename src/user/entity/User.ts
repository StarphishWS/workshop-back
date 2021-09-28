import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string; 

    @Column()
    firstname: string; 

    @Column()
    lastname: string; 

    @Column()
    company: string;
}