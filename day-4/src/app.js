const express = require("express");

const app = express(); // server created

app.use(express.json());

const notes = [];

// GET 
// /notes
app.get("/notes",(req,res)=>{
    res.send(notes);
});


// POST                     
// /notes
app.post("/notes",(req,res)=>{
    // console.log(req.body);

    notes.push(req.body);

    res.send("notes created");
});

// PATCH 
// /notes
app.patch("/notes/:id",(req,res)=>{
    // console.log(req); // chk object and get data and do changes accordingly

    notes[req.params.id].description = req.body.description;

    res.send("data modified successfully");
});

// DELETE 
// /notes
app.delete("/notes/:id",(req,res)=>{
    // console.log(req); // params: [Object: null prototype] { index: '0' },
    // params: [Object: null prototype] { id: '1' },

    delete notes[req.params.id];

    const intId = parseInt(req.params.id);

    res.send(`${ intId + 1} data deleted successfully`);
}); 

module.exports = app;

// "/notes/:id" -> :(jithe colon) to asto dynamic part (dynamic variable)
// access karayla :id -> write (req.params.var_name)
// access (:id) -> req.params.id