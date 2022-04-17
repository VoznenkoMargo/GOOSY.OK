/* eslint-disable no-underscore-dangle */
import Notiflix from "notiflix";
import { addNewComment, deleteOneComments, getAllComments, updateComments } from "../../axios";
import { ADD_COMMENT, GET_ALL_COMMENTS, DELETE_ONE_COMMENTS, UPDATE_COMMENTS, SET_IS_LOADING_COMMENT } from "../actions/commentItemsActions";


export const addUserComment = (newComment) => async (dispatch) => {
  try {
    const result = await addNewComment(newComment);
    if (result.status === 200) {
      dispatch({ type: ADD_COMMENT });
    }
  } catch (error) {
    Notiflix.Notify.info("Failed to add comment. Unauthorized");
  }
};


export const setIsLoadingComment = (isLoading) => ({
    type: SET_IS_LOADING_COMMENT,
    payload: isLoading,
  });


export const getAllUsersComments = () => async (dispatch) => {
    dispatch(setIsLoadingComment(true));
    try{
        const result = await getAllComments();
        if (result.status === 200) {
            dispatch({type: GET_ALL_COMMENTS, payload: result.data})    
        }
    }catch(error){
        Notiflix.Notify.failure("Failed to get comments");
    }finally{
      dispatch(setIsLoadingComment(false));
    }
}


export const putUserComments = (id, updatedComment) => async (dispatch) => {
  try {
    const result = await updateComments(id, updatedComment);
    if (result.status === 200) {
      dispatch({
        type: UPDATE_COMMENTS,
        payload: {
          thumbUp: result.data.thumbUp,
          thumbDown: result.data.thumbDown,
          id: result.data._id,
        },
      });
    }
  } catch (error) {
    Notiflix.Notify.info("Failed to update comments. Unauthorized", {showOnlyTheLastOne: true});
  }
};


export const deleteOneUserComments = (id) => async (dispatch) => {
  try {
    const result = await deleteOneComments(id);
    if (result.status === 200) {
      dispatch({ type: DELETE_ONE_COMMENTS, payload: result.data });
    }
  } catch (error) {
    console.error("Failed to delete comment");
  }
};
