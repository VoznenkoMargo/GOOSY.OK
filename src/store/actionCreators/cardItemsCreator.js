/* eslint-disable import/prefer-default-export */

import { getProducts } from "../../axios";

import { GET_ITEMS } from "../actions/cardItemsActions";

export const initCardItemsCreator = () => async (dispatch) => {
  const { data } = await getProducts();
  console.log(data)
  dispatch({ type: GET_ITEMS, payload: data });
};

// export const initItems = () => (dispatch) => {
//   axios
//     .get(url)
//     .then(({ data }) => {
//       const allItems = Array.isArray(data) ? data : data.products;
//       dispatch({ type: GET_ITEMS, payload: allItems });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
