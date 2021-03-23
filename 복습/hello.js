import express from "express"
import routes from "./routes"
import userrouters from "./controllers/userrouters"
import whorouters from "./controllers/whorouters"
import likerouters from "./controllers/likerouters"
const hello=express();

hello.use(routes.home,userrouters);
hello.use(routes.who,whorouters);
hello.use(routes.like,likerouters)
//hello.get("/",hellya);
//hello.listen(1000);
// hello;

export default hello;