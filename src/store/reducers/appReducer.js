import {combineReducers} from "redux";
import { itemReduser } from "./itemReducer";

const appReducer = combineReducers({
    items: itemReduser
})

export default appReducer;