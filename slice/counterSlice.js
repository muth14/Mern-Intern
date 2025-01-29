import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    count:0
}
const counter = createSlice({
    name:"counter", 
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count = 0
        },
        addValue:(state, action)=>{
            state.count += action.payload
        }

    }
})

export const {increment, decrement, reset, addValue} = counter.actions;
export default counter.reducer;