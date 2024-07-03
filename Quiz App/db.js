const mongoose = require("mongoose")


const connectdb = async () => {
    await mongoose.connect("mongodb://localhost:27017/Quiz")
    console.log("Connect to mongodb");
}
module.exports = connectdb;  