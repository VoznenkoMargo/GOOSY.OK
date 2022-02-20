import {
  SEARCH_ITEMS,
  CLEAR_SEARCH_ITEMS,
} from "../actions/searchItemsActions";
import { searchProducts } from "../../axios";

export const searchItemsCreator = (searchPhrases) => async (dispatch) => {
  const { data } = await searchProducts(searchPhrases);
  dispatch({ type: SEARCH_ITEMS, payload: data });
};

export const clearSearchItemsCreator = () => ({
  type: CLEAR_SEARCH_ITEMS,
});
