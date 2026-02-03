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

    const notes = await noteModel.create({
        title , decription
    });

    res.status(201)
})

module.exports = app;