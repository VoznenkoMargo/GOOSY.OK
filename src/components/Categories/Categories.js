import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.scss";
import { useDispatch } from "react-redux";

import { initCategories } from "../../store/actionCreators/cardItemsCreator";

function Categories() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

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
  }, [handleScroll, scrolled]);

  const setCategories = (categories) => {
    dispatch(initCategories(categories));
  };

  return (
    <div id="navbar" className="categories_block">
      <div className="container">
        <div className="categories_items">
          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=cold snaks"
            className="categories_item_link"
            onClick={() => setCategories("cold snaks")}
          >
            Cold snacks{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=soup"
            className="categories_item_link"
            onClick={() => setCategories("soup")}
          >
            Soups{" "}
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=salads"
            className="categories_item_link"
            onClick={() => setCategories("salads")}
          >
            Salads
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=main dishes"
            className="categories_item_link"
            onClick={() => setCategories("main dishes")}
          >
            Main dishes
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=desert"
            className="categories_item_link"
            onClick={() => setCategories("desert")}
          >
            Deserts
          </NavLink>

          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=hot snaks"
            className="categories_item_link"
            onClick={() => setCategories("hot snaks")}
          >
            Hot snacks{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Categories;
