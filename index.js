const express = require("express");
require('dotenv').config();

const app = express();
const port = 4000;


app.get("/",(req,res)=>{
    res.send("Hello Rajesh")
})

app.get("/twitter",(req,res)=>{
    res.send("Hello twitter")
})


app.listen(process.env.PORT,()=>{
    console.log(`server start ${port}`);
})