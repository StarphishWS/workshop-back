import { getRepository } from "typeorm";
import { User } from "./entity/User";

const userRepository = () => getRepository(User);


export const findAllUser = async () => {
    return userRepository().find({ relations: [] });
};

export const createUser = async (id, data) => {
    const newUser = userRepository().create({
        id: id, 
        email: data.email, 
        firstname: data.firstname, 
        lastname: data.lastname,
        company: data.company
    })
    
    return await userRepository().save(newUser);
}

export const findUserById = async (id) => {
    const user = await userRepository().findOne(id);
    return user; 
}