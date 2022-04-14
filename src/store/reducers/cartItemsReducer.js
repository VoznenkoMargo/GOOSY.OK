/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */

import {
  ADD_TO_CART,
  ADD_TO_LS,
  DELETE_CART,
  SET_IS_LOADING_CART,
  DELETE_FROM_CART,
  GET_CART,
  DECREASE_ITEM,
  DECREASE_FROM_LS,
  DELETE_FROM_LS, GET_CART_LS,
} from "../actions/cartItemsActions";
import {saveToLS} from "../../utils/localStorage";

// import { saveToLS } from "../../utils/localStorage";

const initialState = {
  cartItems: [],
  // lsItems: [],
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
  console.log(state)
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

      /// ////////////////////////// LS /////////////////////////////////////

    case GET_CART_LS: {
      return {...state, cartItems: payload};
    }

    case ADD_TO_LS: {
      const newCartItems = [...state.cartItems];
      // console.log(newCartItems)
      const index = newCartItems.findIndex((elem) => elem.product._id === payload.product._id);
      // console.log(index)
      if (index === -1) {
        const newItem = {...payload};
        newItem.cartQuantity = 1;
        saveToLS("cart", {products: [...state.cartItems, newItem]});
        return {...state, cartItems: [...state.cartItems, newItem]};
      }
      newCartItems[index].cartQuantity += 1;
      saveToLS("cart", { products: newCartItems });
      console.log(state.cartItems)
      return { ...state, cartItems: newCartItems };
    }

    case DECREASE_FROM_LS: {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex((elem) => elem.product._id === payload.product._id);
      newCartItems[index].cartQuantity -= 1;
      if (newCartItems[index].cartQuantity === 0) {
        newCartItems.splice(index, 1);
      }
      saveToLS("cart", { products: newCartItems });
      return { ...state, cartItems: newCartItems };
    }

    case DELETE_FROM_LS: {
      const newCartItems = [...state.cartItems];
      console.log(newCartItems)
      const index = newCartItems.findIndex((elem) => elem.product._id === payload);
      newCartItems.splice(index, 1);
      saveToLS("cart", {cartItems: newCartItems});
      return {...state, cartItems: newCartItems};
    }

    default:
      return state;
  }
};
export default cartItemsReducer;
