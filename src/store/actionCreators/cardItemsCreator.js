/* eslint-disable no-useless-rename */
/* eslint-disable import/prefer-default-export */

import { getProducts, getByCategory } from "../../axios";

import {
  GET_ITEMS,
  GET_FIND_ITEMS,
  SET_IS_LOADING_CARDS,
} from "../actions/cardItemsActions";

export const setIsLoadingCards = (isLoading) => ({
  type: SET_IS_LOADING_CARDS,
  payload: isLoading,
});

export const initCardItemsCreator = () => async (dispatch) => {
  
    dispatch(setIsLoadingCards(true))
    
  try {
    const { data } = await getProducts();
    
    dispatch({ type: GET_ITEMS, payload: data });
    dispatch(setIsLoadingCards(false));
  } catch (e) {
    dispatch(setIsLoadingCards(false));
  }
};

export const initСategoriesItemsCreator = (inquiry) => async (dispatch) => {
  const allCategories = {};
  const {
    data: { products },
  } = await getByCategory(inquiry);
  products.forEach((item) => {
    if (!(`${item.categories}` in allCategories)) {
      allCategories[item.categories] = [item];
    } else {
      allCategories[item.categories] = [
        ...allCategories[item.categories],
        item,
      ];
    }
  });
  dispatch({ type: GET_FIND_ITEMS, payload: allCategories });
};

// // export const initItems = () => (dispatch) => {
// //   axios
// //     .get(url)
// //     .then(({ data }) => {
// //       const allItems = Array.isArray(data) ? data : data.products;
// //       dispatch({ type: GET_ITEMS, payload: allItems });
// //     })
// //     .catch((e) => {
// //       console.log(e);
// //     });
// // };
// >>>>>>> c7f2a4c048f8e00ae4d9214a2b4129009b78b3ad
