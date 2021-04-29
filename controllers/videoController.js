import {videos1} from "../dp" 
import routes from "../routes"
import Video from "../models/Video"
export const home = async(req,res) => {
    try{
    const videos = await Video.find({}); //await는 다음 과정이 끝날 때까지 잠시 기다려 달라는 의미이다.  
    throw Error("lalla");
    

    //이렇게하면 datebase에 있는 모든 video를 가지고 올 수 있다.
    res.render("home",{pageTitle: "Home",videos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle: "Home",videos:[]});
    }
};
export const getUpload=(req,res)=>
    res.render("upload",{pageTitle:"Upload"});

export const postUpload=async(req,res)=>{
    const{
        
        body:{title,description},
        file:{path}
    
    
    }=req;
    const newVideo=await Video.create({
        fileUrl:path,
        title,
        description

    });


    console.log(newVideo); //path를 반환해준다.. 
  
    res.redirect(routes.videosdetail(newVideo.id));
}

export const search=(req,res)=>{
    const {
        query: {term: searchingBy}}=req; //req.query.term term=req.query.term 이라고 하는 것보다 더 좋은 방식이다.

         //파일자체를 저장하는 것이아닌 file의 location을 저장하고 싶다!! 
    //console.log(term);
res.render("search",{pageTitle: "search", searchingBy,videos1});
};



export const videos = (req,res) => res.render("videos",{pageTitle: "Videos"});
export const upload=(req,res)=>res.render("upload",{pageTitle: "Upload"});
export const videosdetail = (req,res) => res.render("videodetail",{pageTitle: "Videos detail"});
export const editvideo=(req,res)=>res.render("editvideo",{pageTitle: "Edit Video"});
export const deletevideo = (req,res) => res.render("deletevideo",{pageTitle: "Delet Video"});
