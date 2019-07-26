import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
