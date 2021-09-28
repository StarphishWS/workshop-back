import * as Router from "koa-router"; 

import { authAccess } from "../middleware/auth"
import { currentData, signUp } from './auth.controller';

const router: Router = new Router(); 

router.post('/sign-up', signUp);
router.get('/current-user', authAccess, currentData);

export default router;