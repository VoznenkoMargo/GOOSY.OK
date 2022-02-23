/* eslint-disable no-param-reassign */
import axios from "axios";
import Notiflix from "notiflix";


const instance = axios.create({
  baseURL: "http://goos-ok.herokuapp.com/api",
});

instance.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      data: response.data,
    };
  },
  (err) => {
    console.error(err);
    Notiflix.Notify.failure("Unable to load dishes. Server error.");
    return Promise.reject(err);
  }
);

instance.interceptors.request.use((config) => {
  if (localStorage.getItem("authToken")) {
    config.headers.Authorization = `${JSON.parse(localStorage.getItem("authToken"))}`;
   
  }
  return config;
});

export default instance;
