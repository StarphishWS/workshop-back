import { getRepository } from "typeorm";
import { Employee } from "./entity/Employee";

const employeeRepository = () => getRepository(Employee);

export const findAllEmployee = async (campaignId) => {
    const employees = await employeeRepository().find({where: {
        campaign: campaignId
    }});
    return employees;
};