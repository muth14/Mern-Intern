import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function View({task, id,handleUpdate}) {
    const[toggle,setToggle]=useState(false)
    const[data,setData]=useState(" ")
    async function handleClick(){
        await axios.delete(`http://localhost:3000/api/v1/todo/${id}`)
        handleUpdate()

    }
    async function handleUpdateServer(e){
        e.preventDefault()
        await axios.put(`http://localhost:3000/api/v1/todo/${id}`,{task:data})
            handleUpdate()
        
    }
  return (
    <div>
        <h2>{task}</h2>
        <button onClick={handleClick}>delete</button>
        <button onClick={()=>setToggle(!toggle)}>update</button>
      {
        toggle && <form action="">
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={(e)=>handleUpdateServer(e)}>update</button>
  </form>
      }
    </div>
  )
}

export default View