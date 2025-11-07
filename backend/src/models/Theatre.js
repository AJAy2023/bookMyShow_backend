const  mongoose =  require("mongoose");

const theaterSchema  = new mongoose.Schema({
    id:{
        type:String,
        ref:"User"
    },
 theaterName:{
            type:String,
            required:true
        },
 MovieList:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Moive"
 },
 
})