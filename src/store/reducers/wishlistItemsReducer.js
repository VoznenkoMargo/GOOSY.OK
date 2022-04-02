/* eslint-disable default-param-last */
import {
  ADD_PRODUCTS_TO_WISHLIST,
  CREATE_WISHLIST,
  DELETE_PRODUCTS_FROM_WISHLIST,
  DELETE_WISHLIST,
  GET_WISHLIST,
  UPDATED_WISHLIST,
} from "../actions/wishlistItemsActions";

const initialState = {
  wishlistItems: [],
};

const wishlistItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WISHLIST: {
      return { ...state, wishlistItems: payload };
    }

    case ADD_PRODUCTS_TO_WISHLIST: {
      return { ...state, wishlistItems: [...payload] };
    }

    case DELETE_PRODUCTS_FROM_WISHLIST: {
      return { ...state, wishlistItems: [...payload] };
    }

    case DELETE_WISHLIST: {
      return { ...state, wishlistItems: [] };
    }

    case CREATE_WISHLIST: {
      return { ...state, wishlistItems: payload };
    }

    case UPDATED_WISHLIST: {
      return { ...state, wishlistItems: payload };
    }

    default:
      return state;
  }
};

export default wishlistItemsReducer;
