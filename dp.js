import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true, //새로운 버전의 mongoose는 이런 식으로 confihuration을 보낼 수 있다.
        useFindAndModify:false,
        useUnifiedTopology:true
    }
    
    );
const db=mongoose.connection;
const handleopen=()=>console.log("연결함");
const handelerror=()=>console.log(`에러야 에러 : ${error}`);
db.once("open",handleopen);
db.on("error",handelerror);