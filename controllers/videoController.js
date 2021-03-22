export const home = (req,res) => res.render("home",{pageTitle: "Home"});
export const search=(req,res)=>{
    const {
        query: {term: searchingBy}}=req; //req.query.term term=req.query.term 이라고 하는 것보다 더 좋은 방식이다.
    //console.log(term);
res.render("search",{pageTitle: "search", searchingBy});
};



export const videos = (req,res) => res.send("videos",{pageTitle: "Videos"});
export const upload=(req,res)=>res.send("upload",{pageTitle: "Upload"});
export const videosdetail = (req,res) => res.send("videodetail",{pageTitle: "Videos detail"});
export const editvideo=(req,res)=>res.send("editvideo",{pageTitle: "Edit Video"});
export const deletevideo = (req,res) => res.send("deletevideo",{pageTitle: "Delet Video"});
