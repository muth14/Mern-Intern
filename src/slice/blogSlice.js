import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
        id: 1,
        author: "Person1",
        data: "Blog1 of person 1",
    },
    {
        id: 2,
        author: "Person2",
        data: "Blog1 of person 2",
    },
    {
        id: 3,
        author: "Person3",
        data: "Blog1 of person 3",
    },
    {
        id: 4,
        author: "Person4",
        data: "Blog1 of person 4",
    },
    {
        id: 5,
        author: "Person5",
        data: "Blog1 of person 5",
    },

];

const post = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: state.length + 1,
                author: action.payload.author,
                data: action.payload.data,
            };
            state.unshift(newPost); // Add new post at the beginning
        },
    },
});

export const { addPost } = post.actions;
export default post.reducer;