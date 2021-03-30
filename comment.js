import mongoose, { mongo } from "mongoose";

const commentSchema=new mongoose.Schema({
    text:{
        type:String,
        required:"Text is required"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});
const model=mongoose.model("comment",commentSchema);
export default model;

//comment는 text이다. 

