import app from "./app";
import "./dp";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/comment";

const PORT = process.env.PORT || 4000; // 대상을 못 찾으면 4000으로 

const handleListening= () => console.log(`★ 듣고 있슈 : http://localhost:${PORT}`);

app.listen(PORT,handleListening);
