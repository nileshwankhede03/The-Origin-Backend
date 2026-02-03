const express = require("express");
const noteModel = require("./models/note.model");

// middleware
const app = express();

app.use(express.json());

app.post("/api/notes",(req,res)=>{

})

module.exports = app;