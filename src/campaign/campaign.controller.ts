import { Context, Next } from "koa";
import ErrorMsg from "../interface/ErrorMsg";

import { findAllCampaign, findCampaignById } from "./campaign.service";


export const getAllCampaign = async (context: Context, next: Next) => {
    try {
        const user = context.state.user; 
        
        const campaigns = await findAllCampaign(user.id);
        context.response.status = 200;
        context.response.body = campaigns;

        next()
    } catch(error) {
        console.log('error', error)
        const errorMsg: ErrorMsg = {
            status: 400, 
            msg: "Couldn't get campaigns"
        }

        context.response.status = 400; 
        context.response.body = errorMsg
    }
};