import { getRepository } from "typeorm";
import { Campaign } from "./entity/Campaign"
import { v4 as uuidv4 } from 'uuid'

const campaignRepository = () => getRepository(Campaign);


export const findAllCampaign = async (userId) => {
    const campaigns = await campaignRepository().find({where: {
        user: userId
    }});
    return campaigns;
};

export const createCampaign = async (data, user) => {
    const newCampaign = campaignRepository().create({ 
        id: uuidv4(), 
        title: data.title, 
        template: data.template, 
        sent: false,
        date: Date(), 
        user: user
    })
    
    return await campaignRepository().save(newCampaign);
}

export const findCampaignById = async (id,userid) => {
    const campaign = await campaignRepository().findOne(id, { where: {user: userid }});
    return campaign;
}