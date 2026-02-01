const app = require("./src/app"); // app can be chacha

const port = 3000;

// server started
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})