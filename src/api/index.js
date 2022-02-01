import axios from "axios";

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
  ({ response }) => {
    return {
      status: response?.status,
      data: response?.data,
      response,
    };
  }
);

export default instance;
