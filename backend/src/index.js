const express =  require("express");
const app  =  express();
require("dotenv").config();
const dbconnect =  require("./config/db");

dbconnect();

//  midd
app.use(express.json());

const PORT = process.env.PORT||4000

app.get('/home',  (req, res)=>{
    res.send("welcome to home page..!");
})

app.listen(PORT ,  ()=>{
    console.log(`the sever running on the port  ${PORT}`);
});

