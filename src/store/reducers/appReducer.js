import { combineReducers } from "redux";
import cardItemsReducer from "./cardItemsReducer";
import cartItemsReducer from "./cartItemsReducer";
import searchItemsReducer from "./searchItemsReducer";


const appReducer = combineReducers({
  items: cardItemsReducer,
  cart: cartItemsReducer,
  search: searchItemsReducer,
  
});

export default appReducer;
