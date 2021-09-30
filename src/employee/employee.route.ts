import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllEmployee } from "./employee.controller";

const router: Router = new Router(); 

router.get('/campaign/:campaignId/employees', authAccess, getAllEmployee);

export default router;