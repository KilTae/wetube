import routes from "../routes";
import express from "express";
import { who } from './usercontroller';
const likerouters=express.Router();

likerouters.get(routes.who,who);
export default likerouters;