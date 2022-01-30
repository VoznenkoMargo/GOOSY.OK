import axios from "axios";
import { GET_ITEMS, GET_URL } from "../actions";

export const initItems = (url) => (dispatch) => {
  axios
    .get(url)
    .then(({ data }) => {
      const allItems = Array.isArray(data) ? data : data.products;
      dispatch({ type: GET_ITEMS, payload: allItems });
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getUrl = (url) => (dispatch) => {
  dispatch({ type: GET_URL, payload: url });
};
