import routes from "../routes";
import express from "express";
import { home, like, who } from './usercontroller';
const userrouters=express.Router();

userrouters.get(routes.home,home);
userrouters.get(routes.like,like);
userrouters.get(routes.who,who);
export default userrouters;