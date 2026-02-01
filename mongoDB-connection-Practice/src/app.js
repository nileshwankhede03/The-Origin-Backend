/*
    app.js ke 2 kaam

    1. Server ko create karna
    2. 
*/
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("done!");
})

module.exports = app;