import axios from "axios";

const API = axios.create({
  baseURL: "https://paginadinamicavbl-production.up.railway.app/api/",
});

export default API;
