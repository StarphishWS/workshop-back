import { Context, Next } from "koa";


import { auth } from '../firebase';
import ErrorMessage from '../interface/ErrorMsg';
import { findUserById } from "../user/user.service";


export const authAccess = async (context: Context, next: Next) => {

    try {
        const token:any = context.request.headers.authorization; 
        const { uid } = await auth.verifyIdToken(token);
        const user = await findUserById(uid);
        context.state.user = user;
        console.log(user)
        await next();

    } catch(error) {
        const errorMsg: ErrorMessage = {
            status: 401, 
            msg: "Unauthenticated request"
        }

        context.response.status = errorMsg.status; 
        context.response.body = errorMsg; 
    }
}