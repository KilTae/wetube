import routes from "../routes";
import express from "express";
import { like } from './usercontroller';
const whorouters=express.Router();

whorouters.get(routes.like,like);
export default whorouters;