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

// import { saveToLS } from "../../utils/localStorage";

const initialState = {
  cartItems: [],
  isLoadingCart: false,
};

// const cartItemsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SET_IS_LOADING_CART: {
//       return { ...state, isLoading: payload };
//     }
//     case ADD_TO_CART: {
//       const newCartItems = [...state.cartItems];
//       const index = newCartItems.findIndex((elem) => elem._id === payload._id);
//       if (index === -1) {
//         const newItem = { ...payload, count: 1, inCart: true };
//         saveToLS("cart", {
//           cartItems: [...state.cartItems, newItem],
//           counter: state.counter + 1,
//         });
//         return {
//           ...state,
//           cartItems: [...state.cartItems, newItem],
//           counter: state.counter + 1,
//         };
//       }
//       newCartItems[index].count += 1;
//       saveToLS("cart", { cartItems: newCartItems, counter: state.counter + 1 });
//       return {
//         ...state,
//         cartItems: newCartItems,
//         counter: state.counter + 1,
//       };
//     }
//
//     case DELETE_ITEM: {
//       const newCartItems = [...state.cartItems];
//       const index = newCartItems.findIndex((elem) => elem._id === payload._id);
//       newCartItems[index].count -= 1;
//       if (newCartItems[index].count === 0) {
//         newCartItems.splice(index, 1);
//       }
//       saveToLS("cart", { cartItems: newCartItems, counter: state.counter - 1 });
//       return { ...state, cartItems: newCartItems, counter: state.counter - 1 };
//     }
//     case DELETE_FROM_CART: {
//       const newCartItems = [...state.cartItems];
//       const index = newCartItems.findIndex((elem) => elem._id === payload._id);
//       const { count } = newCartItems[index];
//       newCartItems.splice(index, 1);
//       saveToLS("cart", {
//         cartItems: newCartItems,
//         counter: state.counter - count,
//       });
//       return {
//         ...state,
//         cartItems: newCartItems,
//         counter: state.counter - count,
//       };
//     }
//     case GET_CART: {
//       return {
//         ...state,
//         cartItems: payload.cartItems,
//         counter: payload.counter,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

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
