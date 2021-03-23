import routes from "../routes";
import express from "express";
const likerouters=express.Router();

likerouters.get(routes.who,(req,res)=>res.send("like who"));
export default likerouters;