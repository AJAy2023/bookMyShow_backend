const mongoose =  require("mongoose");
require("dotenv").config();
const dbconnect =  async ()=>{

    try{    
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb is connected");
    }catch(err)
    {
        console.log("mongo db failed to connect ");
        console.error(err);
    }
}


module.exports=dbconnect;