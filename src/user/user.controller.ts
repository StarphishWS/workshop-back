import { Context, Next } from "koa";
import ErrorMsg from "../interface/ErrorMsg";

import { findAllUser } from "./user.service";


export const getAllUser = async (context: Context, next: Next) => {
    try {
        const users = await findAllUser();

        context.status = 200;
        context.body = users;
      
        next();
    } catch(error) {
        const errorMsg: ErrorMsg = {
            status: 400, 
            msg: "Error get all user"
        }

        context.status = error.status; 
        context.body = errorMsg
    }
};