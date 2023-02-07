import axios from "axios"; // this make http requests easier

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export default instance;
