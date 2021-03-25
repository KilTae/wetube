import express from "express"; // const express = require('express');를 최신버전으로 바꿀 수 있다.
import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleware} from "./middlewares";
 // node module을 어딘가에 가지고 옴  express를 내 파일들 속에서 찾으려고 함.  아님 없으면 node-modul에서 찾으려고 한다.
const app = express(); 
const PORT=4000;
app.use(helmet({contentSecurityPolicy:false}));
app.set('view engine', "pug");
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("div"));

//local 기능을 사용하면 변수에 접근할 수 있다.



app.use(localsMiddleware);

app.use(routes.home,globalRouter); // /join , /login /serch 
app.use(routes.users,userRouter); //누가 user경로로 접속하면 userRouter을 전체 다 사용하겠다는 의미이다.
app.use(routes.videos,videoRouter);

export default app;