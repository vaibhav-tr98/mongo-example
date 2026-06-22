const mongoose = require("mongoose");

const dbconnect = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/College").then((conn)=>{
        console.log("Connection established")
        //console.log(conn)
    })
}

module.exports = dbconnect;
