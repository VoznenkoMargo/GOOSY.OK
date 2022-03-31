import { combineReducers } from "redux";
import cardItemsReducer from "./cardItemsReducer";
import cartItemsReducer from "./cartItemsReducer";
import searchItemsReducer from "./searchItemsReducer";
import wishlistItemsReducer from "./wishlistItemsReducer";
import commentItemsReducer from "./commentItemsReducer";

const rootReducer = combineReducers({
  items: cardItemsReducer,
  cart: cartItemsReducer,
  search: searchItemsReducer,
  wishlist: wishlistItemsReducer,
  comment: commentItemsReducer,
});

export default rootReducer;
