const mongoose = require("mongoose");

const dbconnect = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/College")
        console.log("Connection established");
        
    } catch (error) {
        console.error("Connection Failed:", error);
    }
};

module.exports = dbconnect;
