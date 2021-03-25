import {videos1} from "../dp" 
export const home = (req,res) => {
    res.render("home",{pageTitle: "Home",videos1}

)};
export const search=(req,res)=>{
    const {
        query: {term: searchingBy}}=req; //req.query.term term=req.query.term 이라고 하는 것보다 더 좋은 방식이다.
    //console.log(term);
res.render("search",{pageTitle: "search", searchingBy,videos1});
};



export const videos = (req,res) => res.render("videos",{pageTitle: "Videos"});
export const upload=(req,res)=>res.render("upload",{pageTitle: "Upload"});
export const videosdetail = (req,res) => res.render("videodetail",{pageTitle: "Videos detail"});
export const editvideo=(req,res)=>res.render("editvideo",{pageTitle: "Edit Video"});
export const deletevideo = (req,res) => res.render("deletevideo",{pageTitle: "Delet Video"});
