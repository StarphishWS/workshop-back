import { getRepository } from "typeorm";
import { Campaign } from "./entity/Campaign";

const campaignRepository = () => getRepository(Campaign);


export const findAllCampaign = async (userId) => {
    const campaigns = await campaignRepository().find({where: {
        user: userId
    }});
    return campaigns;
};

export const createCampaign = async (id, data) => {
    const newCampaign = campaignRepository().create({
        id: id, 
        title: data.title, 
        template: data.template, 
        sent: false,
        date: Date()

    })
    
    return await campaignRepository().save(newCampaign);
}

export const findCampaignById = async (id) => {
    const user = await campaignRepository().findOne(id);
    return user;
}