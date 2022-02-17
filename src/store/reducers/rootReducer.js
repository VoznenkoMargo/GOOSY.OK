import { combineReducers } from "redux";
import cardItemsReducer from "./cardItemsReducer";
import cartItemsReducer from "./cartItemsReducer";
import searchItemsReducer from "./searchItemsReducer";

const rootReducer = combineReducers({
  items: cardItemsReducer,
  cart: cartItemsReducer,
  search: searchItemsReducer,
});

export default rootReducer;
