const express = require("express");
const noteModel = require("./models/note.model");

// server created
const app = express();

// middleware
app.use(express.json());

/*
    POST : /api/notes
*/
app.post("/api/notes",(req,res)=>{

})

module.exports = app;