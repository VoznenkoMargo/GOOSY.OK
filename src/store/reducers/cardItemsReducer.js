/* eslint-disable default-param-last */

import { GET_ITEMS, GET_FIND_ITEMS, SET_IS_LOADING_CARDS, SET_CATEGORIES } from "../actions/cardItemsActions";

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


////////////////

    case SET_CATEGORIES:{
      const newCategories = [...initialState.categories];
      console.log(initialState.categories);
    if (!newCategories.includes(payload)) {
      console.log('push');
      newCategories.push(payload)
      console.log(newCategories);
      return { ...state, categories: newCategories}
      } else {
        console.log('splice');
      const index = newCategories.findIndex((i) => i === value);
      newCategories.splice(index, 1);
      return { ...state, categories: newCategories}
      }
    }


    ///////////////
    case GET_FIND_ITEMS: {
      return { ...state, itemsFind: payload };
    }

    case SET_IS_LOADING_CARDS: {
      return {...state, isLoading: payload}
  }

    default: {
      return state;
    }
  }
};

export default cardItemsReducer;
