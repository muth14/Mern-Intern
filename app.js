// const http=require("http")
// const server=http.createServer()
// server.on("request",(req,res)=>{
// console.log("requested");
// })
// server.listen(3000)
// const events = require("events")
// const customerEvent=new events.EventWmitter()
// CustomEvent.on("cs",()=>{
//     console.log("cs is called");
// })
// CustomEvent.emit("cs")
// const express=require("express")
// const app=express()
// app.get("/",(req,res)=>{
//     //res.json({ok:true})
//     //res.status(200).sendFile(__dirname+"/index.html")
//     res.setHeader('content-Type','text/html')

// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })

const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const jsonData = fs.readFileSync(path.join(__dirname, "model", "product.json"), "utf-8")
app.get("/api/v1/products", (req, res)=>{
   try{ res.json({
        status: "fulfilled",
        count: jsonData.length,
        data:{
            products: jsonData
        }
    })
}
catch(error){
    res.status(500).json({
        status:"error",
        message:"Failed to fetch products",
        error:error.message
    })
}
 
})

app.listen(3000, ()=> console.log("http://127.0.0.1:3000"))