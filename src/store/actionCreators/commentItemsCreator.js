import { addNewComment, deleteOneComments, getAllComments, getAllCommentOfProduct } from "../../axios";
import { ADD_COMMENT, GET_ALL_COMMENTS, GET_COMMENTS_OF_PRODUCT, DELETE_ONE_COMMENTS } from "../actions/commentItemsActions";
import Notiflix from "notiflix";

export const addUserComment = (newComment) => async (dispatch) => {
    try{
        const result = await addNewComment(newComment);
        if (result.status === 200) {
            dispatch({type: ADD_COMMENT})
        }
    }catch(error){
        Notiflix.Notify.failure("Failed to add comment. Unauthorized");
    }
}

export const getAllUsersCommentOfProduct = (productId) => async (dispatch) => {
    try{
        const result = await getAllCommentOfProduct(productId);
        if (result.status === 200) {
            dispatch({type: GET_COMMENTS_OF_PRODUCT, payload: result.data})
        }
    }catch(error){
        Notiflix.Notify.failure("Failed to get comment");
    }  
}


export const getAllUsersComments = () => async (dispatch) => {
    try{
        const result = await getAllComments();
        if (result.status === 200) {
            dispatch({type: GET_ALL_COMMENTS, payload: result.data})
        }
    }catch(error){
        Notiflix.Notify.failure("Failed to get comments");
    }  
}


//
export const deleteOneUserComments = (id) => async (dispatch) => {
    try{
        const result = await deleteOneComments(id);
        if (result.status === 200) {
            console.log(result);
            dispatch({type: DELETE_ONE_COMMENTS, payload: result.data})
        }
    }catch(error){
        console.error("Failed to delete comment");
    }
}