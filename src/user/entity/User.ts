import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Campaign } from "../../campaign/entity/Campaign";

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

    @OneToMany(() => Campaign, campaign => campaign.user)
    campaign: Campaign[];
}