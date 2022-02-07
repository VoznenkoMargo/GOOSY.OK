import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import "./Categories.scss";

function Categories() {
  const [scrolled, setScrolled] = useState(false);

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
  //   let navbarClasses=['navbar'];

  return (
    <div id="navbar" className="categories_block">
      <div className="container">
        <div className="categories_items">
          <NavLink
            to="/products/filter?minPrice=0&maxPrice=990&categories=cold snacks"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Cold snacks{" "}
          </NavLink>

          <NavLink
            to="/cat2"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Hot snacks{" "}
          </NavLink>

          <NavLink
            to="/cat3"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Meat dishes
          </NavLink>

          <NavLink
            to="/cat4"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Soups{" "}
          </NavLink>

          <NavLink
            to="/cat5"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Fish dishes
          </NavLink>

          <NavLink
            to="/cat6"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Grill menu
          </NavLink>

          <NavLink
            to="/cat7"
            className="categories_item_link"
            activeClassName="categories_item_link_active"
          >
            Specialties{" "}
          </NavLink>

          <NavLink
            to="/cat8"
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
