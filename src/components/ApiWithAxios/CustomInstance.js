import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=ef1d1c7c&s=Batman"
});

export default apiAxios;