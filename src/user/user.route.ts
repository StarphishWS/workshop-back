
 import * as Router from "koa-router"; 
import { getAllUser } from "./user.controller";

 const router: Router = new Router(); 

router.get('/users', getAllUser);

export default router;