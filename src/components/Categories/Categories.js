import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.scss";
import { useDispatch } from "react-redux";

import {initCategories} from '../../store/actionCreators/cardItemsCreator'


function Categories() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
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
    console.log(categories);
    dispatch(initCategories(categories))
  }

  return (
    <div id="navbar" className="categories_block">
      <div className="container">
        <div className="categories_items">
          <NavLink
            to = "/products/filter?minPrice=0&maxPrice=990&categories=cold snaks"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
            onClick={()=>setCategories('cold snaks')}
          >
            Cold snacks{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=hot snaks"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
            onClick={()=>setCategories('hot snaks')}

          >
            Hot snacks{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=main dishes"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
            onClick={()=>setCategories('main dishes')}

          >
            Meat dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=soup"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
            onClick={()=>setCategories('soup')}

          >
            Soups{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Fish dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Grill menu
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Specialties{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories="
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Beverages
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Categories;
