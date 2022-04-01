
import Notiflix from "notiflix";
import { getProducts, getByCategory } from "../../axios";

import {
  GET_ITEMS,
  GET_FIND_ITEMS,
  SET_IS_LOADING_CARDS,
  SET_CATEGORIES
} from "../actions/cardItemsActions";

export const setIsLoadingCards = (isLoading) => ({
  type: SET_IS_LOADING_CARDS,
  payload: isLoading,
});

export const initCardItemsCreator = () => async (dispatch) => {
  dispatch(setIsLoadingCards(true));
  try {
    const { data } = await getProducts();
    dispatch({ type: GET_ITEMS, payload: data });
    dispatch(setIsLoadingCards(false));
  } catch (e) {
    dispatch(setIsLoadingCards(false));
    Notiflix.Notify.failure("Unable to load dishes. Server error.");
  }
};

export const initCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const initСategoriesItemsCreator = (inquiry) => async (dispatch) => {
  const allCategories = {};
  console.log(inquiry)
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
