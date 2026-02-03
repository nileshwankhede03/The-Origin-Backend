const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title : String,
    description : String
});

