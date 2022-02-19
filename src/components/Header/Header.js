import React from "react";
import { useDispatch } from "react-redux";
import { GiGoose } from "react-icons/gi";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./Header.module.scss";
import Contact from "./Contact/Contact";
import CartBtn from "./CartBtn/CartBtn";
import Search from "./Search/Search";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";
import HeartFromWishlist from "../HeartFromWishlist/HeartFromWishlist";

function Header() {
  const dispatch = useDispatch();
  const home = useRouteMatch("/");
  const products = useRouteMatch("/products");
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.burger}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/products"
            >
              <div className={styles.burger}>
                <GiGoose />
                <p>menu</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/"
            >
              <div
                aria-hidden
                className={styles.logo}
                onClick={() => dispatch(clearSearchItemsCreator())}
              >
                <GiGoose />
                <h1 className={styles.logoText}>goosy.ok</h1>
              </div>
            </NavLink>
          </li>
          {home?.isExact ? (
            <li className={styles.searchComponent}>
              <Search />
            </li>
          ) : null}
          {products?.isExact ? (
            <li className={styles.searchComponent}>
              <Search />
            </li>
          ) : null}

          <li className={styles.contact}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/contact"
            >
              <Contact />
            </NavLink>
          </li>


          

          <li>
            <NavLink
              style={() => {
                return {
                  textDecoration: "none",
                  color: "#cfcfcf",
                }}}
              to="/wishlist">            
              <HeartFromWishlist />
            </NavLink>
          </li>





          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/cart"
            >
              <CartBtn />
            </NavLink>
          </li>
        </ul>
        <div className={styles.searchComponentMobile}>
          <Search />
        </div>
      </nav>
    </header>
  );
}

export default Header;
