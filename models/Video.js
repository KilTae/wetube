import mongoose from "mongoose";
// model => document name / schema 

const VideoSchema= new mongoose.Schema({
    fileUrl: {
        type: String,
        required:"File URL is requird"
    
    
    
    },

    title:{
        type:String,
        required:"Title is required"



    },
    description: String,
    views:{
        type:Number,
        defalut:0

    },

    createdAt:{
        type:Date,
        defalut:Date.now


    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId, // 
        ref:"comment"    //video id를 얻기위해서 유저가 동영상을 저장할 때나 좋아요 할 때 이 방법 사용 




    }]
        
        //video 링크를 집어넣음 저장하지 않는다. 무거워지니까

});

const model=mongoose.model("Video",VideoSchema);
export default model;