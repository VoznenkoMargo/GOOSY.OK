/* eslint-disable no-else-return */
/* eslint-disable default-param-last */

import {
  GET_ITEMS,
  GET_FIND_ITEMS,
  SET_IS_LOADING_CARDS,
  SET_CATEGORIES,
} from "../actions/cardItemsActions";

const initialState = {
  items: [],
  itemsFind: {},
  isLoading: false,
  categories: []
}; 


const cardItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS: {
      return { ...state, items: payload };
    }

    case SET_CATEGORIES: {
      const newCategories = [...state.categories];
      console.log(payload);
      if (!newCategories.includes(payload)) {
        newCategories.push(payload);
        return { ...state, categories: newCategories };
      } else {
        const index = newCategories.findIndex((i) => i === payload);
        newCategories.splice(index, 1);
        return { ...state, categories: newCategories };
      }
    }

    case GET_FIND_ITEMS: {
      return { ...state, itemsFind: payload };
    }

    case SET_IS_LOADING_CARDS: {
      return { ...state, isLoading: payload };
    }

    default: {
      return state;
    }
  }
};

export default cardItemsReducer;
