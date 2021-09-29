import { Column, Entity, ManyToOne, PrimaryColumn, TableForeignKey } from "typeorm";
import { User } from "../../user/entity/User";

export enum template {
    GOOGLE = 'google'
}

@Entity()
export class Campaign {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string; 

    @Column()
    date: Date; 

    @Column({
        type: 'enum', 
        enum: template, 
        default: template.GOOGLE
    })
    template: template; 

    @Column()
    sent: boolean;

    @ManyToOne(() => User, user => user.campaign)
    user: User;


}