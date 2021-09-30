import { getRepository } from "typeorm";
import { Employee } from "./entity/Employee";

const employeeRepository = () => getRepository(Employee);

export const findAllEmployee = async (campaignId) => {
    const employees = await employeeRepository().find({where: {
        campaign: campaignId
    }});
    return employees;
};

export const findEmployeeById = async (employeeId) => {
    const employees = await employeeRepository().find({where: {
        id: employeeId
    }});
    return employees;
};

export const updateStepEmployee = async (employeeId, step) => {

    let employee = await employeeRepository().findOne({where: {
        id: employeeId
    }});

    employee = { 
        ...employee,
        step: step
    };
    
    return await employeeRepository().save(employee);
}