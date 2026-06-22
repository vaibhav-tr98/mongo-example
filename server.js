const express = require("express")

const app = express()
const sRoutes = require("./routes/studentRoutes")
const dbconnect = require("./config/db")

app.use(express.json())
dbconnect()
app.use("/api/v1/rrcollege/student",sRoutes)


app.listen(5000,()=>{
    console.log("Server is running on 5000")
})