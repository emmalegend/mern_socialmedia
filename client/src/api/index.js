import axios from "axios";

const url = "http://localhost:5001/posts";

//POSTS.
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);

//AUTH
export const signin = () => {};
export const signup = () => {};
