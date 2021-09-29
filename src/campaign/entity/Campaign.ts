import { Column, Entity, ManyToOne, PrimaryColumn, TableForeignKey } from "typeorm";
import { User } from "../../user/entity/User";

@Entity()
export class Campaign {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string; 

    @Column()
    date: Date; 

    @Column()
    template: string; 

    @Column()
    sent: boolean;

    @ManyToOne(() => User, user => user.campaign)
    user: User;


}