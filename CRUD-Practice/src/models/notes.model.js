const mongoose = require("mongoose");

const notesScmeha = new mongoose.Schema({
    title : String,
    description : String
});

const notesModel = mongoose.model("note",notesScmeha);

module.exports = notesModel;