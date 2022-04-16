/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */

import {
  ADD_TO_CART,
  DELETE_CART,
  SET_IS_LOADING_CART,
  DELETE_FROM_CART,
  GET_CART,
  DECREASE_ITEM,
} from "../actions/cartItemsActions";

const initialState = {
  cartItems: [],
  isLoadingCart: false,
};

const cartItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART: {
      return { ...state, cartItems: payload };
    }

    case ADD_TO_CART: {
      return { ...state, cartItems: payload };
    }
    case DELETE_FROM_CART: {
      return { ...state, cartItems: payload };
    }
    case DELETE_CART: {
      return { ...state, cartItems: [] };
    }
    case DECREASE_ITEM: {
      return { ...state, cartItems: payload };
    }

    case SET_IS_LOADING_CART: {
      return { ...state, isLoadingCart: payload };
    }

    default:
      return state;
  }
};
export default cartItemsReducer;
