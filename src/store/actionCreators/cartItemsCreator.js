/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cartItemsActions";

export const addToCartCreator = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});
export const deleteFromCartCreator = (cartItem) => ({
  type: DELETE_FROM_CART,
  payload: cartItem,
});
