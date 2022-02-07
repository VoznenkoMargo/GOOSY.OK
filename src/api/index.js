import axios from "axios";
import Notiflix from "notiflix";

const instance = axios.create({
  baseURL: "http://35.180.205.240:5000/api",
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
