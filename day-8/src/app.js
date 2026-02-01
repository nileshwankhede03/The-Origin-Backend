
// server ko create karna

const express = require("express");
const notesModel = require("./models/notes.model");

const app = express()

app.use(express.json());

app.post('/notes',async (req,res)=>{

    const {title , description } = req.body;

    console.log(title);
    console.log(description);

    const note = await notesModel.create({
        title , description
    });

    res.status(201).json({
        message : "data created successfully",
        note
    });

})

// find() : returns data in the form of array.
// all listed data return krrte

app.get('/notes',async (req,res)=>{
    const notes = await notesModel.find();

    res.status(200).json({
        notes, 
        message : "notes fetched successfully"
    })
})

module.exports = app;