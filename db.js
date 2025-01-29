const mongoose = require('mongoose')
const cust = require("./schema")
async function db(){
    try{
    await mongoose.connect("mongodb://localhost:27017/customer")
    console.log("db connected")
    }catch(error){
        console.log("Error on connection db");
    }

//     const newCustomer = new cust({
//         name: "John",
//         age: 21,
//         address: {
//             pincode: 123456,
//             state: "TN"
//         },
//         hobbies:["reading", "Coding"]
//     })

// newCustomer.save()

// const newCustomer = await cust.create({
//     name: "John",
//     age:21,
//     address: {
//         pincode: 123456,
//         state: "TN"
//     },
//     hobbies:["reading", "Coding"]
// })
// console.log(newCustomer)
// }

// const newCustomer = await cust.create({
//     name: "muthhu",
//     age:20,
//     email: "muthu@gmail.com",
// friend:"67985e27ae6b97c7d8b7b6ee",
//     address: {
//         pincode: 642001,
//         state: "TN"
//     },
//     hobbies:["reading", "Coding","dancing"]
// })
// console.log(newCustomer)
 const customerData = await cust.findById("679866630c1195d3352886c3").populate("friend")
 console.log(customerData)
// const customerData = await cust.find().where("name").equals("Sandhya")
// console.log(customerData)
}
db()