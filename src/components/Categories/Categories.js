import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Categories.scss";
import { useDispatch, useSelector } from "react-redux";

import {initCategories} from '../../store/actionCreators/cardItemsCreator'


function Categories() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
  const categories = useSelector((store) => store.items.categories);
  

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 98) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrolled) {
      document.getElementById("navbar").classList.add("scrolled");
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
    }
  });

  const setCategories = (categories)=>{
    dispatch(initCategories(categories))
  }
  const setActivClass = (id)=>{
    if(categories.includes(id)){
        return 'categories_item_link categories_item_link_active'
    } else {return 'categories_item_link'}
  }

  return (
    <div id="navbar" className="categories_block">
      <div className="container">
        <div className="categories_items">
         <NavLink
            to = "/products/filter?minPrice=0&maxPrice=990&categories=cold snaks"
            className={setActivClass('cold snaks')}
            // activeClassName="categories_item_link_active"
            onClick={()=>setCategories('cold snaks')}
          >
            Cold snacks{" "}
          </NavLink>
  
          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=hot snaks"
            className={setActivClass('hot snaks')}
            // activeClassName="categories_item_link_active"
            onClick={()=>setCategories('hot snaks')}

          >
            Hot snacks{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=main dishes"
            className={setActivClass('main dishes')}
            // activeClassName="categories_item_link_active"
            onClick={()=>setCategories('main dishes')}

          >
            Meat dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=soup"
            className={setActivClass('soup')}
            // activeClassName="categories_item_link_active"
            onClick={()=>setCategories('soup')}

          >
            Soups{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className={setActivClass('Fish dishes')}  //// нет у нас
            // activeClassName="categories_item_link_active"
          >
            Fish dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className={setActivClass('Grill menu')} //// нет у нас
            // activeClassName="categories_item_link_active"
          >
            Grill menu
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className={setActivClass('Specialties')} //// нет у нас
            // activeClassName="categories_item_link_active"
          >
            Specialties{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className={setActivClass('Beverages')} //// нет у нас
            // activeClassName="categories_item_link_active"
          >
            Beverages
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Categories;
