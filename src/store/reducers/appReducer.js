import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

const appReducer = combineReducers({
  items: itemReducer,
});

export default appReducer;
