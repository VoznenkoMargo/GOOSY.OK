import React, {useEffect, useState} from "react";

import { NavLink } from "react-router-dom"

import './categories.scss'

function Categories () {

    const [scrolled, setScrolled]= useState(false);
    const handleScroll=() => {
        // const sticky = document.getElementById('navbar').offsetTop;
        // console.log(sticky)
    const offset=window.scrollY;
    // console.log("Offset:", offset)
    if(offset > 98 ){
      setScrolled(true);
      
    }
    else{
      setScrolled(false);
    }
  }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        console.log(window.scrollY)
        console.log('Hello')
        if(scrolled){
            document.getElementById('navbar').classList.add('scrolled');
          }else{
            document.getElementById('navbar').classList.remove('scrolled');
          }
      })
    //   let navbarClasses=['navbar'];

      


    return(
        
        <div id='navbar' className="categories_block">
            <div className="container">
                <div className='categories_items'>
                <NavLink to="/cart1" className='categories_item_link' activeClassName='categories_item_link_active'>Холодные закуски </NavLink>
            
                <NavLink to="/cart2" className='categories_item_link'  activeClassName='categories_item_link_active'>Горячие закуски </NavLink>
      
         
                <NavLink to="/cart3" className='categories_item_link' activeClassName='categories_item_link_active'>Мясные блюда</NavLink>
         
           
                <NavLink to="/cart4" className='categories_item_link' activeClassName='categories_item_link_active'>Супы </NavLink>
           
           
                <NavLink to="/cart5" className='categories_item_link' activeClassName='categories_item_link_active'>Рыбные блюда</NavLink>
          
       
                <NavLink to="/cart6" className='categories_item_link' activeClassName='categories_item_link_active'>Гриль меню</NavLink>
       
         
                <NavLink to="/cart7" className='categories_item_link' activeClassName='categories_item_link_active'>Фирменные блюда </NavLink>
   
     
                <NavLink to="/cart8" className='categories_item_link' activeClassName='categories_item_link_active'>Напитки</NavLink>
    

                </div>
                </div>
        </div>
    )



}

export default Categories;
