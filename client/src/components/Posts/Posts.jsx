import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const post = useSelector((state) => state.posts);
  console.log(post);
  return <div>Posts</div>;
};

export default Posts;
