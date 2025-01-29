import React from 'react'
import {useSelector} from "react-redux"
function ViewPost() {
  const selector = useSelector(state => state.post)
  console.log(selector);
  
  return (
    <div>
        {selector.map((i,k) => (
            <div key={k}>  
                <h1>{i.author}</h1>
                <p>{i.data}</p>
            </div>
        ))}


    </div>
  )
}

export default ViewPost