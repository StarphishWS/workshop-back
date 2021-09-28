import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';

//routes
import userRouter from './user/user.route';
import authRouter from './auth/auth.route';

const app:Koa = new Koa();

app.use(cors({
    origin: "*"
})); 
app.use(bodyParser());

//routes
app.use(userRouter.routes())
app.use(authRouter.routes())

app.on('error', console.error); 

export default app; 