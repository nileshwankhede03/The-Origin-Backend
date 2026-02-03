const app = require("./src/app");
require("./src/config/database")
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})