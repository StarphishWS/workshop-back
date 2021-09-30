import * as Router from "koa-router"; 
import { authAccess } from "../middleware/auth";
import { getAllEmployee, setStepEmployee } from "./employee.controller";

const router: Router = new Router(); 

router.get('/campaign/:campaignId/employees', authAccess, getAllEmployee);
router.put('/employee/:employeeId/:employeeStep', setStepEmployee);

export default router;