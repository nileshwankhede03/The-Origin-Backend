/*
    server.js ke 2 kaam

    1. Server ko start karna
    2. Database 
*/

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() 
{
    mongoose.connect("mongodb+srv://nilu:uXor6SJYXFX9cz9v@cluster0.mpcxu7t.mongodb.net/Nilesh_Table")
    .then(()=>{
        console.log("database connected sucessfully!");
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

connectToDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
