import { Column, Entity, ManyToOne, PrimaryColumn, TableForeignKey } from "typeorm";
import { Campaign } from "../../campaign/entity/Campaign";

@Entity()
export class Employee {

    @PrimaryColumn()
    id: string;

    @Column()
    firstname: string; 

    @Column()
    lastname: string; 

    @Column()
    email: string;

    @ManyToOne(() => Campaign, campaign => campaign.employee)
    campaign: Campaign;
}