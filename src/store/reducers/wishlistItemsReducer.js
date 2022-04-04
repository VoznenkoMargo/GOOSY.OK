/* eslint-disable default-param-last */
import { ADD_PRODUCTS_TO_WISHLIST, DELETE_PRODUCTS_FROM_WISHLIST, DELETE_WISHLIST, GET_WISHLIST, SET_IS_LOADING_WISHLIST } from "../actions/wishlistItemsActions";


const initialState = {
    wishlistItems: [],
    isLoading: false,
}

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

    case SET_IS_LOADING_WISHLIST: {
      return {...state, isLoading: payload}
    }
    
    default:
      return state;
    }
};

export default wishlistItemsReducer;
