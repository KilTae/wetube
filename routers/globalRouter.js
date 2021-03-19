
import express from "express";
import {home,search} from "../controllers/videoController"
import {login,logout,Join} from "../controllers/userController"

import routes from '../routes';
import routers from "../routes";

const globalRouter = express.Router(); //이 녀석을 내보낼 수 있다.ㄴ

globalRouter.get(routes.home,home); //export해서 이렇게 다른 파일 변수를 사용할 수 있따.
globalRouter.get(routes.join,Join);
globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search,search);

export default globalRouter; // what export ???  파일로 export한다는 뜻이다.
