
import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllCampaign } from "./campaign.controller";
import { getOneCampaign } from "./campaign.controller";
import { newCampaign } from "./campaign.controller";
import { startCampaign } from "./campaign.controller";

const router: Router = new Router(); 

router.get('/campaigns', authAccess, getAllCampaign);
router.get('/campaign/:campaignId', authAccess, getOneCampaign);
router.post('/campaign', authAccess, newCampaign);
router.get('/sendcampaign/:id', authAccess, startCampaign);

export default router;