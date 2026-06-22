const express = require("express")
const {getAllStudents,createStudent} = require("../controllers/studentController")

const router = express.Router()

router.get("/getStudents",getAllStudents);
router.post("/create",createStudent);


module.exports = router

