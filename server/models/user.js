const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    adhar_no:{
        type:String,
        require:true
    }
});

const User = mongoose.model("BoomUser",userSchema);
module.exports = User