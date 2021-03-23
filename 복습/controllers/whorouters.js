import routes from "../routes";
import express from "express";
const whorouters=express.Router();

whorouters.get(routes.like,(req,res)=>res.send("who like"));
export default whorouters;