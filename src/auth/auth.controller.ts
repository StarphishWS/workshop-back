import { Context, Next } from "koa";
import ErrorMsg from "../interface/ErrorMsg";
import { createUser } from "../user/user.service";
import { removeUserFirebase, createUserFirebase } from "./auth.service";


export const signUp = async (ctx: Context, next: Next) => {
    let uid; 
    try {   
        const data = ctx.request.body;
        console.log(data);
        uid = await createUserFirebase(data.email, data.password);
        //create user
        const newUser = await createUser(uid, data);

        ctx.response.status = 201;
        ctx.response.body = newUser;
        next();

    } catch(error) {
        console.log(error);
        await removeUserFirebase(uid);

    const errorMsg: ErrorMsg = {
      status: 400,
      msg: "The user could not be created",
    };

    ctx.status = errorMsg.status;
    ctx.response.body = errorMsg;
    }
}

export const currentData = async (ctx: Context, next: Next) => {
    const user = ctx.state.user; 
    ctx.status = 200; 
    ctx.body = user; 
}