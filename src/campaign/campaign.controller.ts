import { Context, Next } from "koa";
import { CannotConnectAlreadyConnectedError } from "typeorm";
import ErrorMsg from "../interface/ErrorMsg";

import { findAllCampaign, findCampaignById, createCampaign } from "./campaign.service";


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

export const getOneCampaign = async (context: Context, next: Next) => {
    try {
        const campaignid = context.params.id;
        const user = context.state.user;
        
        const campaigns = await findCampaignById(campaignid, user.id);

        if(!campaigns) {
         throw 'no found campaigns'
        }
        else{
            context.response.status = 200;
            context.response.body = campaigns;
        }

        next()
    } catch(error) {
        console.log('error', error)
        const errorMsg: ErrorMsg = {
            status: 401, 
            msg: "No campaign found"
        }

        context.response.status = 400; 
        context.response.body = errorMsg
    }
};

export const newCampaign = async (context: Context, next: Next) => {
    try {
        const user = context.state.user; 
        const data = context.request.body;
        console.log(data);
        
        const output = await createCampaign(data, user);
        context.response.status = 200;
        context.response.body = output;

        next()
    } catch(error) {
        console.log('error', error)
        const errorMsg: ErrorMsg = {
            status: 400, 
            msg: "Couldn't create a new campaign"
        }

        context.response.status = 400; 
        context.response.body = errorMsg
    }
};