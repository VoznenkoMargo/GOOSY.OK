/* eslint-disable default-param-last */

import { GET_ITEMS, GET_FIND_ITEMS, SET_IS_LOADING_CARDS } from "../actions/cardItemsActions";

const initialState = {
  items: [],
  itemsFind: {},
  isLoading: false,
};

const cardItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS: {
      return { ...state, items: payload };
    }

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
