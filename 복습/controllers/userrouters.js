import routes from "../routes";
import express from "express";
const userrouters=express.Router();

userrouters.get(routes.home,(req,res)=>res.send("골져스"));
userrouters.get(routes.like,(req,res)=>res.send("좋아요"));
userrouters.get(routes.who,(req,res)=>res.send("Who am I?"));
export default userrouters;