import express from "express";
import routes from "../routes";


const userRouter = express.Router(); //이 녀석을 내보낼 수 있다.


userRouter.get(routes.users,(req,res)=>res.send('Users')); ///users/edit-profile
userRouter.get(routes.usersdetail,(req,res)=>res.send('Users detail'));
userRouter.get(routes.editprofile,(req,res)=>res.send('Edit Profile'));
userRouter.get(routes.changepassword,(req,res)=>res.send('Change Password'));
export default userRouter; // what export ???  파일로 export한다는 뜻이다.
