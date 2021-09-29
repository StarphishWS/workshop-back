import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllEmployee } from "./employee.controller";

const router: Router = new Router(); 

router.get('/employees/:campaignId', authAccess, getAllEmployee);

export default router;