const Student = require("../Modals/studentModal")


const getAllStudents = async (req,res)=>{
    const data = await Student.find()
    //console.log("DB ko pucha")

    res.json({"data":data})


}


const createStudent = async (req,res)=>{

    
    await Student.create(req.body)
    

    res.send("Thank you data saved in DB")
}


module.exports ={getAllStudents,createStudent}