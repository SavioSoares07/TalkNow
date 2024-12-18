const express = require("express")
const app = express()
const PORT = 3333;

//Router
const Router = require("./routes/index.routes")


app.use('/', Router)

app.listen(PORT, ()=>{
    console.log("Server is running")
})