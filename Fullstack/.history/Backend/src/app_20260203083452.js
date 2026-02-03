const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");
// server created
const app = express();

// middleware
app.use(express.json());
app.use(cors())
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
    DELETE : /api/notes/:id
*/
app.delete("/api/notes/:id",async (req,res)=>{

    const { id } = req.params;

    const notes = await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message : "note deleted successfully",
        notes
    });
});

/*
    PATCH : /api/notes/:id
*/

app.patch("/api/notes/:id",async (req,res)=>{

    try 
    {
        const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { new: true }
        );

        res.json(updatedNote);
    } 
    catch (err) 
    {
        res.status(500).json({ error: err.message });
    }
});
/*
    PUT : /api/notes/:id
*/

app.put("/api/notes/:id",async (req,res)=>{

    const { id } = req.params;
    const {title , description} = req.body;

    const notes = await noteModel.findByIdAndUpdate(id , { title , description } , {new : true});

    res.status(200).json({
        message : "note updated successfully",
        notes
    });
});

module.exports = app;