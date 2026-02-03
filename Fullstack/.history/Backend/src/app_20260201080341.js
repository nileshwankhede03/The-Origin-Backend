const express = require("express");
const noteModel = require("./models/note.model");

// server created
const app = express();

// middleware
app.use(express.json());

/*
    POST : /api/notes
*/
app.post("/api/notes",async (req,res)=>{
    const {title , decription } = req.body;

    await noteModel.create({
        title , decription
    })
})

module.exports = app;