import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import View from './View'
import axios from 'axios'

function Task() {
    
    const [value, setValue] = useState('')
    const[data, setData] = useState([])
    
    async function getData(){
        let response = await axios.get("http://localhost:3000/api/v1/todo")
        setData(response.data)
     }
    
useEffect(()=>{
    getData()
}, [])

    async function handleClick(e){
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/api/v1/todo", {task: value})
        getData();
    }
  return (
    <div>
        <form action="">
            <label htmlFor = "addtask">Add Task </label>
        <input value = {value} onChange = {(e)=> setValue(e.target.value)} type = "text"  id = "addtask" placeholder='           Enter the task'/>
        <button onClick = {(e)=> handleClick(e)}>Add Task</button>
        </form>
        <div>
            {data.length > 0 && data.map((i,k)=> <View key = {i._id} id={i._id} handleUpdate={getData} task = {i.task}/>)}    
        </div>
    </div>
  )
}

export default Task