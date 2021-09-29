
import * as Router from "koa-router"; 
import { getAllCampaign } from "./campaign.controller";

 const router: Router = new Router(); 

router.get('/campaigns', getAllCampaign);

export default router;