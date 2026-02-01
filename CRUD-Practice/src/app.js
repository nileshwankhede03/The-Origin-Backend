const express = require("express");
const mongoose = require("mongoose");
const notesModel = require("./models/notes.model");

const app = express();

app.use(express.json());

/* =======================
   POST - Create Note
======================= */
app.post("/notes", async (req, res) => {
  try 
  {
    const { title, description } = req.body;

    const note = await notesModel.create({ title, description });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note
    });
  } 
  catch (error) 
  {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

/* =======================
   GET - All Notes
======================= */
app.get("/notes", async (req, res) => {
  try 
  {
    const notes = await notesModel.find();

    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes
    });
  } 
  catch (error) 
  {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/* =======================
  PUT - Full Update
======================= */
app.put("/notes/:id", async (req, res) => {
  try 
  {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    const updatedNote = await notesModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedNote) 
    {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote
    });
  } 
  catch (error) 
  {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

/* =======================
   PATCH - Partial Update
======================= */
app.patch("/notes/:id", async (req, res) => {
  try 
  {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    const updatedNote = await notesModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedNote) 
    {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote
    });
  } 
  catch (error) 
  {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

/* =======================
   DELETE - Remove Note
======================= */
app.delete("/notes/:id", async (req, res) => {
  try 
  {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    const deletedNote = await notesModel.findByIdAndDelete(id);

    if (!deletedNote) 
    {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully"
    });
  } 
  catch (error) 
  {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = app;
