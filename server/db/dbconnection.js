const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const express = require ("express");
app=express();


dotenv.config({path:'./config.env'});
const DB =process.env.DB;
const PORT =process.env.PORT;
app.use(express.json());

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("Unable to connect");
});

app.listen(PORT,()=>{
    console.log(`Your server is running on ${PORT} port. You can use same port.`)
});



