import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import View from './view'
function Search() {
    const [value, setValue] = useState("")
    const[data,setData]= useState([])
    async function handleViews(){
        let res = await axios.get(`http://localhost:3000/api/v1/search?search= ${value}`)
        setData(res.data)

    }
    function handleClick(e){
        e.preventDefault()
        handleViews()
    }
  return (
    <div>
        <form action = "">
            <input value={value} onChange={(e)=> setValue(e.target.value)} type = "text"/>
            <button onClick = {(e)=>handleClick(e)}>search</button>
        </form>
        {
            data.map((i)=><View title={i.title} description={i.description}/>)
        }
    </div>
  )
}

export default Search