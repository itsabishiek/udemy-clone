import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://udemyion.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
