/* eslint-disable default-param-last */

import { GET_ITEMS, GET_FIND_ITEMS } from "../actions/cardItemsActions";

const initialState = {
  items: [],
};

const cardItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS: {
      return { ...state, items: payload };
    }

    case GET_FIND_ITEMS: {
      return { ...state, items: payload };
    }
    // case GET_URL: {
    //   return { ...state, url: payload };
    // }

    default: {
      return state;
    }
  }
};

export default cardItemsReducer;
