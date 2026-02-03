const express = require("express");
require("./models/note.model")
const app = express();

app.use(express.json());

app.post("/api/notes",(req,res)=>{

})

module.exports = app;