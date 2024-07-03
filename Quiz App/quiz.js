const mongoose = require("mongoose")

let Quiz = new mongoose.Schema({
    question: String,
    options:[],
    correct: String
})

const Quizdata = mongoose.model("quiz", Quiz)

module.exports = Quizdata; 

