<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
=======
/* eslint-disable default-param-last */
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
import { GET_ITEMS, GET_URL } from "../actions";

const initialState = {
  items: [],
  url: "http://35.180.205.240:5000/api/products/",
};

<<<<<<< HEAD
// eslint-disable-next-line default-param-last
export const itemReduser = (state = initialState, { type, payload }) => {
=======
const itemReducer = (state = initialState, { type, payload }) => {
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
  switch (type) {
    case GET_ITEMS: {
      return { ...state, items: payload };
    }

    case GET_URL: {
      return { ...state, url: payload };
    }

    default: {
      return state;
    }
  }
};
<<<<<<< HEAD
=======
export default itemReducer;
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
