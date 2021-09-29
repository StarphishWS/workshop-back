import { Context, Next } from "koa";
import ErrorMsg from "../interface/ErrorMsg";

import { findCampaign } from "../campaign/campaign.service";
import { findAllEmployee } from "./employee.service";


export const getAllEmployee = async (context: Context, next: Next) => {
    try {
        const campaign = await findCampaign(context.params.campaignId);
        const employees = await findAllEmployee(campaign.id);
        
        context.response.status = 200;
        context.response.body = employees;

        next()
    } catch(error) {
        console.log('error', error)
        const errorMsg: ErrorMsg = {
            status: 400, 
            msg: "Couldn't get campaign"
        }

        context.response.status = 400; 
        context.response.body = errorMsg
    }
};