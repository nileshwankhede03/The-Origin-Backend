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
    const {title , description } = req.body;

    const notes = await noteModel.create({
        title , description
    });

    res.status(201).json({
        message : "note created successfully",
        notes
    });
});
/*
    GET : /api/notes
*/
app.get("/api/notes",async (req,res)=>{

    const notes = await noteModel.find();

    res.status(200).json({
        message : "note fetched successfully",
        notes
    });
});

/*
    delete : /api/notes/:id
*/
app.delete("/api/notes/:id",async (req,res)=>{

    const { id } = req.params;

    const notes = await noteModel.delete(id);

    res.status(200).json({
        message : "note deleted successfully",
        notes
    });
});

module.exports = app;