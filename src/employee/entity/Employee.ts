import { Column, Entity, ManyToOne, PrimaryColumn, TableForeignKey } from "typeorm";
import { Campaign } from "../../campaign/entity/Campaign";

export enum stepEmployee {
    NONE = "none",
    CLICK = "click",
    FORM = "form"
}

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

    @Column({
        type: 'enum', 
        enum: stepEmployee, 
        default: stepEmployee.NONE
    })
    step: stepEmployee;
    

    @ManyToOne(() => Campaign, campaign => campaign.employee)
    campaign: Campaign;
}