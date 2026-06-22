const mongoose = require("mongoose")


const StudentSchema = mongoose.Schema({
    "name":String,
    "roll":String,
    "mobile":Number
})

module.exports = mongoose.model("Student",StudentSchema)