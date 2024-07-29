// import axios from "axios";

// const instance = axios.create({
// 	baseURL: "https://api.themoviedb.org/3",
// });

// export default instance;

// utils/axios.js
// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = import.meta.env.VITE_TMDB_API_KEY;
  return config;
});

export default instance;


