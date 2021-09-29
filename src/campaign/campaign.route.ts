
import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllCampaign } from "./campaign.controller";

 const router: Router = new Router(); 

router.get('/campaigns', authAccess, getAllCampaign);

export default router;