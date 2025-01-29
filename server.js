const express = require('express')
const app = express()
const DB = require('./DB/db')
const cors = require('cors')
const todoSchema = require('./model/schema')
app.use(express.json())

app.use(cors())

app.get("/api/v1/todo", async (req, res)=>{
    await DB()
    const task = await todoSchema.find()
    console.log(task);
    res.json(task);
})

app.post("/api/v1/todo", async (req, res)=>{
    await DB()
    const body = await req.body
    console.log(body);
    let status = await todoSchema.create(body)
    res.json(status)
})

app.put("/api/v1/todo/:id", async (req, res)=>{
    let id = req.params.id
    let response = await todoSchema.updateOne({_id: id}, {$set : {task: req.body.task}})
    res.json(response)
})

app.delete("/api/v1/todo/:id", async (req, res)=>{
    let id = req.params.id
    let response = await todoSchema.deleteOne({_id: id}, {$set: req.body})
    res.json(response)
})

app.listen(3000, ()=>{
    console.log("Server is running")
})