import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableForeignKey } from "typeorm";
import { Employee } from "../../employee/entity/Employee";
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

    @OneToMany(() => Employee, employee => employee.campaign)
    employee: Employee;
}