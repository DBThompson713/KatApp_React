import axios from "axios";
import { getTokenSilently } from "./../react-auth0-spa";

const api = axios.create({
  baseURL: "https://well-kids-api.herokuapp.com"
});

api.interceptors.request.use(
  async config => {
    const token = await getTokenSilently();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

export default api;
