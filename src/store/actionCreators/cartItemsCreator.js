// import Notiflix from "notiflix";

import {
    getCart,
    deleteCart,
    addProductToCart,
    deleteProductFromCart,
    decreaseProductFromCart, updatedCart,
} from "../../axios";

import {
    ADD_TO_CART,
    DELETE_CART,
    DELETE_FROM_CART,
    GET_CART,
    SET_IS_LOADING_CART,
    DECREASE_ITEM, ADD_TO_LS,
    DECREASE_FROM_LS, DELETE_FROM_LS, GET_CART_LS,
} from "../actions/cartItemsActions";
// import {getFromLS} from "../../utils/localStorage";

export const setIsLoadingCart = (isLoading) => ({
  type: SET_IS_LOADING_CART,
  payload: isLoading,
});
const isAuth = localStorage.getItem("authToken");
// const lsCart = getFromLS("cart")

export const getCartCreator = () => async (dispatch) => {
  // if (isAuth !== null) {
    try {
      const { status, data } = await getCart();
      if (status === 200 && data !== null) {
          console.log(data)
        dispatch({ type: GET_CART, payload: data.products });
      }
    } catch (error) {
        // dispatch({ type: GET_CART, payload: lsCart.products || lsCart.cartItems })
      console.log(error);
    }
  // }
  // if (!isAuth) dispatch({ type: GET_CART, payload: cartLS });
};

export const addToCartCreator = (productId) => async (dispatch) => {
  if (isAuth) {
      try {
          const { status, data } = await addProductToCart(productId);
          if (status === 200 && data !== null) {
            dispatch({ type: ADD_TO_CART, payload: data.products });
          }
      } catch (error) {
          console.log(error);
          // Notiflix.Notify.failure("Unauthorized");
      }
    }
  }

export const deleteProductFromCartCreator = (productId) => async (dispatch) => {
  if (isAuth) {
      try {
          dispatch(setIsLoadingCart(true));
          const { status, data } = await deleteProductFromCart(productId);
          if (status === 200);
          dispatch({ type: DELETE_FROM_CART, payload: data.products });
          dispatch(setIsLoadingCart(false));
      } catch (error) {
          console.log(error);
          // Notiflix.Notify.failure("Unauthorized");
      }
    }
  }

export const decreaseProductFromCartCreator = (productId) => async (dispatch) => {
    try {
      const { status, data } = await decreaseProductFromCart(productId);
      if (status === 200 && data !== null) {
        dispatch({ type: DECREASE_ITEM, payload: data.products });
      }
    } catch (error) {
      console.log(error);
      // Notiflix.Notify.failure("Unauthorized");
    }
  };

export const deleteCartCreator = () => async (dispatch) => {
  try {
    dispatch(setIsLoadingCart(true));
    const result = await deleteCart();
    if (result.status === 200) dispatch({ type: DELETE_CART, payload: result });
    dispatch(setIsLoadingCart(false));
  } catch (error) {
    console.log(error);
  }
};


export const syncCartCreator = (products) => async (dispatch) => {
    try {
        const { status, data } = await updatedCart(products);
        if (status === 200) {
            console.log(data)
            dispatch({ type: GET_CART, payload: data.products });
        }
    } catch (error) {
        // dispatch({ type: GET_CART, payload: lsCart.products || lsCart.cartItems })
        console.log(error);
    }
};

/// ////////////////////////// LS /////////////////////////////////////

export const addToLsCreator = (cartItem) => ({
  type: ADD_TO_LS,
  payload: {
    cartQuantity: 0,
    product: cartItem
  },
});

export const decreaseProductFromLsCreator = (cartItem) => ({
  type: DECREASE_FROM_LS,
  payload: cartItem,
});

export const deleteProductFromLsCreator = (cartItem) => ({
  type: DELETE_FROM_LS,
  payload: cartItem,
});

export const getLsCartCreator = (cartItem) => ({
  type: GET_CART_LS,
  payload: cartItem,
});
