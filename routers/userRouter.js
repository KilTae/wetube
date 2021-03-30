import express from "express";
import { changepassword, editprofile, users, usersdetail } from '../controllers/userController';
import routes from "../routes";
const userRouter = express.Router(); //이 녀석을 내보낼 수 있다.

///users/edit-profile
userRouter.get(routes.users,users);
userRouter.get(routes.editprofile,editprofile);
userRouter.get(routes.changepassword,changepassword);
userRouter.get(routes.usersdetail(),usersdetail);


export default userRouter; // what export ???  파일로 export한다는 뜻이다.
