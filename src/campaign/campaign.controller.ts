import { Context, Next } from "koa";
import ErrorMsg from "../interface/ErrorMsg";

import { findAllCampaign } from "./campaign.service";


export const getAllCampaign = async (context: Context, next: Next) => {
    try {
        const campaigns = await findAllCampaign();

        context.status = 200;
        context.body = campaigns;
      
        next();
    } catch(error) {
        const errorMsg: ErrorMsg = {
            status: 400, 
            msg: "Couldn't get campaigns"
        }

        context.status = error.status; 
        context.body = errorMsg
    }
};