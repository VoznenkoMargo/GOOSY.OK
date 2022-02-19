import axios from "axios";
import Notiflix from "notiflix";

// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
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
  // ({ response }) => {
  //   return {
  //     status: response?.status,
  //     data: response?.data,
  //     response,
  //   };
  // }
  (err) => {
    console.error(err);
    // throw new Error(err.response.data.message);
    Notiflix.Notify.failure("Unable to load dishes. Server error.");
    return Promise.reject(err);
  }
);

export default instance;
