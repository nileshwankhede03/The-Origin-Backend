const app = require("./src/app");
const mongoose = require("mongoose");

function ToConnectDB()
{
    mongoose.connect("mongodb+srv://nilesh:7b9If9O8cdnk5hiO@cluster0.9slskmn.mongodb.net/day-5")
    .then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log(err);
    });
}

ToConnectDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})