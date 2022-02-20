import { addNewWishlist, addProductToWishlist, deleteProducFromWishlist, deleteWishlist, getWishlist, updatedWishlist } from "../../axios";
import { ADD_PRODUCTS_TO_WISHLIST, CREATE_WISHLIST, DELETE_PRODUCTS_FROM_WISHLIST, DELETE_WISHLIST, GET_WISHLIST, UPDATED_WISHLIST } from "../actions/wishlistItemsActions";

export const getUserWishlist = () => async (dispatch) => {
    try{
        const result = await getWishlist();
        if (result.status === 200) {
            dispatch({type: GET_WISHLIST, payload: result.data.products})
        }
    }catch(error){
        console.error("Some Error");
    }
   
}


export const createUserWishlist = (newWishlist) => async (dispatch) => {
    try {
        const result = await addNewWishlist(newWishlist);
        if(result.status === 200)
        dispatch({type: CREATE_WISHLIST, payload: result})       
    } catch (error) {
        console.error("Some Error");
    }
}


export const addProductToUserWishlist = (productId) => async (dispatch) => {
    try {
        const result = await addProductToWishlist(productId);
        if(result.status === 200)
        dispatch({type: ADD_PRODUCTS_TO_WISHLIST, payload: result.data.products})
    } catch (error) {
        console.error("Some Error");
    }
}


export const deleteProductFromUserWishlist = (productId) => async (dispatch) => {
    try {
        const result = await deleteProducFromWishlist(productId);
        if(result.status === 200)
        dispatch({type: DELETE_PRODUCTS_FROM_WISHLIST, payload: result.data.products})
    } catch (error) {
        console.error("Some Error");
    }
}


export const deleteUserWishlist = () => async (dispatch) => {
    try {
        const result = await deleteWishlist();
        if(result.status === 200)
        dispatch({type: DELETE_WISHLIST, payload: result})
        
    } catch (error) {
        console.error("Some Error");
    }
}


export const updatedUserWishlist = (productId) => async (dispatch) => {
    try {
        const result = await updatedWishlist(productId);
        if(result.status === 200)
        dispatch({type: UPDATED_WISHLIST, payload: result})
        
    } catch (error) {
        console.error("Some Error");
    }
}