import { ADD_COMMENT, DELETE_ONE_COMMENTS, GET_ALL_COMMENTS, GET_COMMENTS_OF_PRODUCT } from "../actions/commentItemsActions";


const initialState = {
    comments: [],
    commentsProduct: [],
    
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

  case DELETE_ONE_COMMENTS: {
    return {...state, comments: [...payload]}
  }

  default:{
    return state;
  }

 }
}

export default commentItemsReducer;