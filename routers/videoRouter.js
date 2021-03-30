
import express from "express";
import { deletevideo, editvideo, upload, videos, videosdetail } from '../controllers/videoController';
import routes from "../routes";

const videoRouter = express.Router(); //이 녀석을 내보낼 수 있다.ㄴ
//videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.videosdetail(),videosdetail);
videoRouter.get(routes.editvideo,editvideo);
videoRouter.get(routes.deletevideo,deletevideo);

export default videoRouter; // what export ???  파일로 export한다는 뜻이다.
