import { combineReducers } from "redux";
import cardItemsReducer from "./cardItemsReducer";
import cartItemsReducer from "./cartItemsReducer";
import searchItemsReducer from "./searchItemsReducer";
import wishlistItemsReducer from "./wishlistItemsReducer";

const appReducer = combineReducers({
  items: cardItemsReducer,
  cart: cartItemsReducer,
  search: searchItemsReducer,
  wishlist: wishlistItemsReducer,
});

export default appReducer;
