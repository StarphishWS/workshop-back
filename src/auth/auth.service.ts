import { auth } from "../firebase";
import { createUser } from "../user/user.service";


export const createUserFirebase = async (email: string, password: string) => {
    const newUser = await auth.createUser({ email, password }); 
    return newUser.uid; 
}

export const removeUserFirebase = async (uid: string) => {
    try {
      return await auth.deleteUser(uid);
    } catch (error) {
      return "User don't exist";
    }
};