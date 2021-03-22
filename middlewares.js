import routes from "./routes";

export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = "wetube";
    res.locals.routes=routes;
    next(); //미들웨어가 next에 req를 전달해야 함. 미들웨어가 커넥션과 라우트들 사이에 있으니까 여기서 next를 넣음.


};
