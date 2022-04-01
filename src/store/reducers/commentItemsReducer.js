import { ADD_COMMENT, DELETE_ONE_COMMENTS, GET_ALL_COMMENTS, GET_COMMENTS_OF_PRODUCT, SET_IS_LOADING_COMMENT, UPDATE_COMMENTS } from "../actions/commentItemsActions";


const initialState = {
    comments: [],
    commentsProduct: [],
    thumb: [],
    isLoading: false,
}

const commentItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_COMMENT: {
    return {...state}
  }

  case GET_COMMENTS_OF_PRODUCT: {
    return {...state, commentsProduct: [...payload]}
  }

  case GET_ALL_COMMENTS: {
    return {...state, comments: [...payload]}
  }

  case UPDATE_COMMENTS: {
    return {...state, thumb:[...state.thumb, payload]}
  }
 
  case DELETE_ONE_COMMENTS: {
    return {...state, comments: [...payload]}
  }

  case SET_IS_LOADING_COMMENT: {
    return {...state, isLoading: payload}
  }

  default:{
    return state;
  }

 }
}

export default commentItemsReducer;