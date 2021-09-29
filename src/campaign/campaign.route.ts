
import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllCampaign } from "./campaign.controller";
import { getOneCampaign } from "./campaign.controller";

 const router: Router = new Router(); 

router.get('/campaigns', authAccess, getAllCampaign);
router.get('/campaign/:id', authAccess, getOneCampaign);

export default router;