/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
import {
  SEARCH_ITEMS,
  CLEAR_SEARCH_ITEMS,
} from "../actions/searchItemsActions";

const initialState = {
  searchItems: [],
  isSearched: false,
};

const searchItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_ITEMS: {
      return {
        ...state,
        searchItems: payload,
        isSearched: true,
      };
    }
    case CLEAR_SEARCH_ITEMS: {
      return {
        ...state,
        searchItems: [],
        isSearched: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default searchItemsReducer;
