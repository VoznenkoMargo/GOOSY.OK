/* eslint-disable default-param-last */

import { GET_ITEMS, GET_FIND_ITEMS } from "../actions/cardItemsActions";

const initialState = {
  items: [],
  itemsFind:{}
};

const cardItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS: {
      console.log(payload);
      return { ...state, items: payload };
    }

    case GET_FIND_ITEMS:{
      console.log(payload.soup);
      return { ...state, itemsFind: payload }
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
