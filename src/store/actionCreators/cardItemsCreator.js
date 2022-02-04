/* eslint-disable import/prefer-default-export */


import { getProducts, getByCategory } from "../../axios";

import { GET_ITEMS, GET_FIND_ITEMS } from "../actions/cardItemsActions";

export const initCardItemsCreator = () => async (dispatch) => {
  const { data } = await getProducts();
  dispatch({ type: GET_ITEMS, payload: data });
};

export const initСategoriesItemsCreator = (inquiry) => async (dispatch) => {
  const {categories:categories, price:price} = inquiry
  const categ = `categories=${categories.toString()}`
  const pric = `minPrice=${price[0]}&maxPrice=${price[1]}`
  console.log(price);
  if(categories.length !==0){
    const { data: {products} } = await getByCategory(`${categ}&${pric}`);
    dispatch({type: GET_FIND_ITEMS, payload: products});
    }
    else {
      const { data: {products} } = await getByCategory(pric);
    dispatch({type: GET_FIND_ITEMS, payload: products});
    }
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
