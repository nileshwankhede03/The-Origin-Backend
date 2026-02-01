const express = require("express")


const app = express();


app.get("/",(req,res)=>{
    res.send("Done");
})

module.exports = app;