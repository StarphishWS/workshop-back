import { Context, Next } from "koa";
import { ContainerInterface } from "typeorm";
import ErrorMsg from "../interface/ErrorMsg";
import { sendMail } from "../sendgrid/sendgrid.service";


import { findAllCampaign, findCampaignById, createCampaign, sendToEmployee } from "./campaign.service";
import { findAllEmployee } from "../employee/employee.service";
import { Employee, stepEmployee } from "../employee/entity/Employee";

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
        const campaignid = context.params.campaignId;
        const user = context.state.user;
        
        const campaign = await findCampaignById(campaignid, user.id);
        const employees = await findAllEmployee(campaign.id);

        const mailsent = campaign.sent ? employees.length : 0;
        let click = 0;
        let form = 0;
        employees.forEach(employee => {
            if (employee.step === stepEmployee.CLICK) click++;
            if (employee.step === stepEmployee.FORM) form++;
        });

        context.response.status = 200;
        context.response.body = {
            ...campaign,
            "sent": mailsent,
            "click": click+form,
            "form": form
        };

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

export const startCampaign = async (context: Context, next: Next) => {
    try {
        const campaignid = context.params.id;
        const user = context.state.user;
        
        const campaign = await findCampaignById(campaignid, user.id, true);

        if(!campaign) {
         throw 'no found campaigns'
        }
        else{
            context.response.status = 200;
            var response = "Sending to following users:\n";

            campaign.employee.forEach(current =>  {
                sendMail(current.email);
                response+= current.email + "\n";
                
            });
            context.response.body = response;


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
}