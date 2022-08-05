import React, { Component, useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";

function App() {
  const [posts, setPosts] = useState([
    { first_comment: "Hello", second_comment: "Hi" },
  ]);
  return (
    <div>
      <h1></h1>
      <DisplayPosts postsBelow={posts} />
      <CreatePosts topPosts={posts} />
      <Posts postsExists={posts} />
    </div>
  );
}

export default App;
