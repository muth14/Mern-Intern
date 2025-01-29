const mongoose = require('mongoose')

async function DB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/todo')
        console.log("Connected to DB")
    }
    catch(error){
        console.log("Error connecting to DB")
    }   
}

module.exports = DB