
const  mongoose =  require("mongoose");
const BookingSchema  =  new mongoose.Schema({

    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
});


module.exports = mongoose.model("Booking", BookingSchema);