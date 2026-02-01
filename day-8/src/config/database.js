const mongoose = require("mongoose")

function connectToDb()
{
    mongoose.connect("mongodb+srv://nilesh:WHaI6TjPfe25KNRx@cluster0.0p9kghr.mongodb.net/day-7")
    .then(()=>{
        console.log("Database server connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToDb;