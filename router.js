import express from "express";

export const userRouter = express.Router(); //이 녀석을 내보낼 수 있다.ㄴ

userRouter.get("/",(req,res) => res.send('user index'));
userRouter.get("/edit",(req,res) => res.send('user edit'));
userRouter.get("/password",(req,res) => res.send('user password'));


