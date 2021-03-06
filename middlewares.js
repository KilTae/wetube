import multer from "multer";
import routes from "./routes";

export const multerVideo=multer({dest:"videos/"}) //destination을 videos/로 함. 
export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = "wetube";
    res.locals.routes=routes;
    res.locals.user={
        isAuthenticated:true,
        id:1

    };

    next(); //미들웨어가 next에 req를 전달해야 함. 미들웨어가 커넥션과 라우트들 사이에 있으니까 여기서 next를 넣음.


};

export const uploadVideo=multerVideo.single("videoFile"); //single은 하나의 파일만을 의미한다. 