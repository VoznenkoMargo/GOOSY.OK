import { combineReducers } from "redux";
import cardItemsReducer from "./cardItemsReducer";
import cartItemsReducer from "./cartItemsReducer";

const appReducer = combineReducers({
  items: cardItemsReducer,
  cart: cartItemsReducer,
});

export default appReducer;
