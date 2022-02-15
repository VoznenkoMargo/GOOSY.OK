import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  DELETE_ITEM,
} from "../actions/cartItemsActions";

export const addToCartCreator = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});
export const getCartCreator = (cart) => ({
  type: GET_CART,
  payload: cart,
});
export const deleteItemCreator = (cart) => ({
  type: DELETE_ITEM,
  payload: cart,
});
export const deleteFromCartCreator = (cartItem) => ({
  type: DELETE_FROM_CART,
  payload: cartItem,
});
