import express from "express"; // const express = require('express');를 최신버전으로 바꿀 수 있다.
import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser"
import bodyparser from "body-parser"
 // node module을 어딘가에 가지고 옴  express를 내 파일들 속에서 찾으려고 함.  아님 없으면 node-modul에서 찾으려고 한다.
const app = express(); 
const PORT=4000;



const handleHome=(req,res)=>res.send("hello baby");
const handleProfile =(req,res)=> res.send("You are on my profile");
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("div"));

app.use(helmet());
app.get("/",handleHome); //누군가가 app에 접속하게 되면 handlehome을 부름
app.get("/profile",handleProfile);