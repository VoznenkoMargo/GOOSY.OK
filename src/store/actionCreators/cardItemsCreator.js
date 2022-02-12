/* eslint-disable import/prefer-default-export */


import { getProducts, getByCategory } from "../../axios";

import { GET_ITEMS, GET_FIND_ITEMS } from "../actions/cardItemsActions";

export const initCardItemsCreator = () => async (dispatch) => {
  const { data } = await getProducts();
  dispatch({ type: GET_ITEMS, payload: data });
};


export const initСategoriesItemsCreator = (inquiry) => async (dispatch) => {

  const allCategories={};
    console.log(inquiry);
    const { data: {products} } = await getByCategory(inquiry);   
    products.forEach((item)=>{
      if(!(`${item.categories}` in allCategories)){
        allCategories[item.categories] = [item]
       }
        else {
          allCategories[item.categories] = [...allCategories[item.categories],item]
        }
    });
      dispatch({type: GET_FIND_ITEMS, payload: allCategories});
    }