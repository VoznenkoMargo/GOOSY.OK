import React from "react";

import { NavLink } from "react-router-dom"

import './categories.scss'

function Categories () {

    return(
        <div className="categories_block">

                <NavLink to="/cart1" className='categories_item_link' activeClassName='categories_item_link_active'>Холодные закуски </NavLink>
            
                <NavLink to="/cart2" className='categories_item_link'  activeClassName='categories_item_link_active'>Горячие закуски </NavLink>
      
         
                <NavLink to="/cart3" className='categories_item_link' activeClassName='categories_item_link_active'>Мясные блюда</NavLink>
         
           
                <NavLink to="/cart4" className='categories_item_link' activeClassName='categories_item_link_active'>Супы </NavLink>
           
           
                <NavLink to="/cart5" className='categories_item_link' activeClassName='categories_item_link_active'>Рыбные блюда</NavLink>
          
       
                <NavLink to="/cart6" className='categories_item_link' activeClassName='categories_item_link_active'>Гриль меню</NavLink>
       
         
                <NavLink to="/cart7" className='categories_item_link' activeClassName='categories_item_link_active'>Фирменные блюда </NavLink>
   
     
                <NavLink to="/cart8" className='categories_item_link' activeClassName='categories_item_link_active'>Напитки</NavLink>
    

           
        
        </div>
    )



}

export default Categories;
