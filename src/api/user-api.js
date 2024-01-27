import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getUsers = async () => {
  const response = await axios.get("users");
  return response.data;
};

export const getUserDetails = async (id) => {
  const response = await axios.get(`users/${id}`);
  return response.data;
};

export const getPostIdDetails = async (id) => {
  const response = await axios.get(`users/${id}/posts`);
  return response.data;
};

export const getAlbumDetails = async (id) => {
  const response = await axios.get(`users/${id}/albums`);
  return response.data;
};
