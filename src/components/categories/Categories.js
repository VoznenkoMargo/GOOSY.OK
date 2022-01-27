import React from "react";

import { NavLink } from "react-router-dom"

import './categories.scss'

function Categories () {

    return(
        <div className="categories_block">

         <ul className="categories_list" >
             <li>
                <NavLink to="/cart1" className='categories_item_link' activeClassName='categories_item_link_active'>Холодные закуски </NavLink>
            </li>
            <li>
                <NavLink to="/cart2" className='categories_item_link'  activeClassName='categories_item_link_active'>Горячие закуски </NavLink>
            </li>
            <li>
                <NavLink to="/cart3" className='categories_item_link' activeClassName='categories_item_link_active'>Мясные блюда</NavLink>
            </li>
            <li>
                <NavLink to="/cart4" className='categories_item_link' activeClassName='categories_item_link_active'>Супы </NavLink>
            </li>
            <li>
                <NavLink to="/cart5" className='categories_item_link' activeClassName='categories_item_link_active'>Рыбные блюда</NavLink>
            </li>
            <li>
                <NavLink to="/cart6" className='categories_item_link' activeClassName='categories_item_link_active'>Гриль меню</NavLink>
            </li>
            <li>
                <NavLink to="/cart7" className='categories_item_link' activeClassName='categories_item_link_active'>Фирменные блюда </NavLink>
            </li>
            <li>
                <NavLink to="/cart8" className='categories_item_link' activeClassName='categories_item_link_active'>Напитки</NavLink>
            </li>

        </ul>   
        
        </div>
    )



}

export default Categories;
