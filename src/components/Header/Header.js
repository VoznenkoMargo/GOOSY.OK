import React from "react";
import { GiGoose } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Contact from "./Contact/Contact";
import CartBtn from "./CartBtn/CartBtn";
import Search from "./Search/Search";

function Header() {
  return (
    <header className={styles.root}>
      <nav>
        <ul>
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
              <div className={styles.logo}>
                <GiGoose />
                <h1 className={styles.logoText}>goosy.ok</h1>
              </div>
            </NavLink>
          </li>

          <li className={styles.searchComponent}>
            <Search />
          </li>

          <li className={styles.contact}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/contact">            
              <Contact />
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/cart">            
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
