const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title : String,
    description : String,
});

const notesModel = mongoose.model("notes",notesSchema); // for CRUD needed!

module.exports = notesModel;