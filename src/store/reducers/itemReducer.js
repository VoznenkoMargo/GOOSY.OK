import { GET_ITEMS, GET_URL } from "../actions";


const initialState = {
    items:[],
    url:"http://35.180.205.240:5000/api/products/"
}

export const itemReduser =(state = initialState, {type, payload})=>{
     switch(type){
         case GET_ITEMS:{
             return {...state, items: payload}
         }

         case GET_URL:{
             return{...state, url: payload}
         }

         default:
            {return state}
     }

     
}