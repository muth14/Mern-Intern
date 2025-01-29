import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./Slice/blogSlice";

function CreatePost() {
  const [author, setAuthor] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = () => {
    if (author.trim() && data.trim()) {
      dispatch(addPost({ author, data })); // Dispatch the action with user input
      setAuthor(""); // Clear the form fields
      setData("");

      // Redirect to /posts to view the new post
      navigate("/posts");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div>
      <h2><strong>Create Post</strong></h2>
      <div>
      <label><b>Author</b></label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Enter author"
      />
      
      </div>
      <div>
      <label><b>Data</b></label>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type="text"
        placeholder="Enter data"
      />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CreatePost;