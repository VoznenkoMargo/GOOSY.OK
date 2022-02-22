import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import "./Categories.scss";
import { useDispatch, useSelector } from "react-redux";

import {initCategories, initCategory} from '../../store/actionCreators/cardItemsCreator'


function Categories() {
  
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
  const categories = useSelector((store) => store.items.categories);
  

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrolled) {
      document.getElementById("header").classList.add("scrolled");
    } else {
      document.getElementById("header").classList.remove("scrolled");
    }
  });

  const setCategory = (category)=>{
    console.log(category)
    dispatch(initCategory(category))
  }
  

  return (
    <div id="navbar" className="categories_block">
      <div className="container">
        <div className="categories_items">
         <NavLink
             to = "/products/filter?minPrice=0&maxPrice=990&categories=cold snaks"
            className="categories_item_link"
            onClick={()=>setCategory('cold snacks')}
          >
            Cold snacks{" "}
          </NavLink>

          <NavLink
             to="/products/filter?minPrice=0&maxPrice=990&categories=soup"
            className="categories_item_link"
            onClick={()=>setCategory('soup')}
          >
            Soups{" "}
          </NavLink>

          <NavLink
             to="/products/filter?minPrice=0&maxPrice=990&categories=salads"
            className="categories_item_link"
            onClick={()=>setCategory('salads')}
          >
            Salads
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=main dishes"
            className="categories_item_link"
            onClick={()=>setCategory('main dishes')}
          >
            Main dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=desert"
            className="categories_item_link"
            onClick={()=>setCategory('desert')}
          >
            Deserts
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=hot snaks"
            className="categories_item_link"
            onClick={()=>setCategory('hot snaks')}
          >
            Hot snacks{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Categories;
