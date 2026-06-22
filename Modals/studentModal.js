const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
    "name":String,
    "roll":String,
    "mobile":Number
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
async function main(){
    //CREATE
    const student = await Student.create({
        "name":"Vaibhav",
        "roll":"123",
        "mobile":1234567890
    });

    console.log("Created Student:", student);

    //READ
    const students = await Student.find();
    console.log("All Students:", students);

//UPDATE
const updateStudent = await Student.findOneAndUpdate(
    {roll:"123"}, // Filter criteria
    {name:"Vaibhav Kumar"}, // Update data
    {new:true} // Return the updated document
);
console.log("Updated Student:", updateStudent);
//DELETE
const deleteStudent = await Student.findOneAndDelete({roll:"123"});
console.log("Deleted Student:", deleteStudent);
}
main().catch((err)=>console.log(err));
