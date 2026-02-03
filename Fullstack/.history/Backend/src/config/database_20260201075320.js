const mongoose = require("mongoose");

function connectToDb() 
{
    mongoose.connect(process.env.MON)
    .then(()=>{
        console.log("DB Connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToDb;