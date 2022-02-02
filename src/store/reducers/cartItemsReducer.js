/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ITEM,
  GET_CART,
} from "../actions/cartItemsActions";

import {
  // getFromLS,
  //  removeFromLS,
  saveToLS,
} from "../../utils/localStorage";

const initialState = {
  // cartItems: getFromLS("cart").cartItems || [],
  // counter: getFromLS("cart").counter || 0,
  cartItems: [],
  counter: 0,
};

const cartItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex((elem) => elem._id === payload._id);
      if (index === -1) {
        const newItem = { ...payload, count: 1 };
        saveToLS("cart", {
          cartItems: [...state.cartItems, newItem],
          counter: state.counter + 1,
        });
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          counter: state.counter + 1,
        };
      }
      newCartItems[index].count += 1;
      saveToLS("cart", { cartItems: newCartItems, counter: state.counter + 1 });
      return {
        ...state,
        cartItems: newCartItems,
        counter: state.counter + 1,
      };
    }
    case DELETE_ITEM: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex((elem) => elem._id === payload._id);
      newCartItems[index].count -= 1;
      if (newCartItems[index].count === 0) {
        newCartItems.splice(index, 1);
      }
      saveToLS("cart", { cartItems: newCartItems, counter: state.counter - 1 });
      return { ...state, cartItems: newCartItems, counter: state.counter - 1 };
    }
    case DELETE_FROM_CART: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex((elem) => elem._id === payload._id);
      const count = newCartItems[index].count;
      console.log(count);
      console.log(index);
      newCartItems.splice(index, 1);
      saveToLS("cart", {
        cartItems: newCartItems,
        counter: state.counter - count,
      });
      // newCartItems.splice(index, 1);
      console.log(newCartItems);
      return {
        ...state,
        cartItems: newCartItems,
        counter: state.counter - count,
      };
    }
    case GET_CART: {
      return {
        ...state,
        cartItems: payload.cartItems,
        counter: payload.counter,
      };
    }

    default: {
      return state;
    }
  }
};

export default cartItemsReducer;
