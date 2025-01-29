import React from "react"
import {decrement, increment, reset, addValue} from "../../slice/counterSlice.js"
import {useSelector, useDispatch} from "react-redux"

function Counter(){
  const selector = useSelector((state)=>state.counter)
  console.log(selector);
  
  const dispatch = useDispatch()
  let userValue = 0;
  function handleClick(){
    const userValue = Number.parseInt(prompt("Enter a value"))
    dispatch(addValue(userValue))
  }
  return (
    <div>
      <div>
        <h2>Counter: {selector.count} </h2>
        <div>
          <button onClick={()=>dispatch(increment())}>
            Increment
          </button>
          <button onClick={()=>dispatch(decrement())}>
            Decrement
          </button>
          <button onClick={()=>dispatch(reset())}>
            Reset
          </button>
          <button onClick={handleClick}>Click</button>
        </div>
      </div>
    </div>
);
}
export default Counter;