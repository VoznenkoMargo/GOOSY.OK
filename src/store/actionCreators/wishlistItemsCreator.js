import Notiflix from "notiflix";
import {
  addNewWishlist,
  addProductToWishlist,
  deleteProducFromWishlist,
  deleteWishlist,
  getWishlist,
  updatedWishlist,
} from "../../axios";
import {
  ADD_PRODUCTS_TO_WISHLIST,
  CREATE_WISHLIST,
  DELETE_PRODUCTS_FROM_WISHLIST,
  DELETE_WISHLIST,
  GET_WISHLIST,
  SET_IS_LOADING_WISHLIST,
  UPDATED_WISHLIST,
} from "../actions/wishlistItemsActions";

export const setIsLoadingWishlist = (isLoading) => ({
  type: SET_IS_LOADING_WISHLIST,
  payload: isLoading,
});

export const getUserWishlist = () => async (dispatch) => {
  try {
    const result = await getWishlist();
    if (result.status === 200 && result.data !== null) {
      dispatch({ type: GET_WISHLIST, payload: result.data.products }); 
    }
  } catch (error) {
    Notiflix.Notify.failure("Unauthorized");
  }
};

export const addProductToUserWishlist = (productId) => async (dispatch) => {
  try {
    dispatch(setIsLoadingWishlist(true));
    const result = await addProductToWishlist(productId);
    if (result.status === 200)
      dispatch({
        type: ADD_PRODUCTS_TO_WISHLIST,
        payload: result.data.products,
      });
  } catch (error) {
    Notiflix.Notify.failure("Unauthorized. The product has not been added from the wishlist");
  }finally{
    dispatch(setIsLoadingWishlist(false));
  }
};

export const deleteProductFromUserWishlist = (productId) => async (dispatch) => {
    try {
      dispatch(setIsLoadingWishlist(true));
      const result = await deleteProducFromWishlist(productId);
      if (result.status === 200)
        dispatch({
          type: DELETE_PRODUCTS_FROM_WISHLIST,
          payload: result.data.products,
        });
    } catch (error) {
      Notiflix.Notify.failure("The product has not been removed from the wishlist");
    } finally{
      dispatch(setIsLoadingWishlist(false));
    }
  };

export const deleteUserWishlist = () => async (dispatch) => {
  try {
    dispatch(setIsLoadingWishlist(true));
    const result = await deleteWishlist();
    if (result.status === 200)
      dispatch({ type: DELETE_WISHLIST, payload: result });
  } catch (error) {
    Notiflix.Notify.failure("Wishlist has not been deleted");
  }finally{
    dispatch(setIsLoadingWishlist(false));
  }
};

export const updatedUserWishlist = (productId) => async (dispatch) => {
  try {
    const result = await updatedWishlist(productId);
    if (result.status === 200)
      dispatch({ type: UPDATED_WISHLIST, payload: result });
  } catch (error) {
    console.error("Wishlist has not been updated");
  }
};

export const createUserWishlist = (newWishlist) => async (dispatch) => {
  try {
    const result = await addNewWishlist(newWishlist);
    if (result.status === 200)
      dispatch({ type: CREATE_WISHLIST, payload: result });
  } catch (error) {
    console.error("Wishlist has not been created");
  }
};
