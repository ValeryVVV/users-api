import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getUsers = async () => {
  const users = await axios.get("users");
  return users.data;
};

export const getPostIdDetails = async (id) => {
  const { data } = await axios.get(`posts/${id}`);
  return data;
};

export const getAlbumDetails = async (id) => {
  const album = await axios.get(`albums/${id}`);
  return album.data;
};
