import { getRepository } from "typeorm";
import { User } from "./entity/User";

const userRepository = () => getRepository(User);


export const findAllUser = async () => {
    return userRepository().find({ relations: [] });
};