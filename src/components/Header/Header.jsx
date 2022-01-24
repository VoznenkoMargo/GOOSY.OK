import React from "react";
import { FiPhoneCall, FiShoppingCart } from "react-icons/fi";
import {GiGoose} from "react-icons/gi"
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.root}>
      <nav>
        <ul>
            <li className={styles.burger}>
                <div className={styles.burger}>
                {/* <FiMenu/> */}
                <GiGoose/>
                <p >меню</p>
                </div>

            </li>
          <li>
            <NavLink 
            style={{ textDecoration: 'none' }}
            activeClassName={styles.active} 
             to="/">
                 <div className={styles.logo}>
                <GiGoose/>
                <h1 className={styles.logoText}>goosy.ok</h1>
              </div>
            </NavLink>
          </li>

          <li>
            <div> 
                <form>
                    <input
                        type="text"
                        placeholder="Что будем кушать?"/>
                                     
                </form>
            </div> 
          </li>
          
          <li className={styles.contact}>
            <NavLink 
            style={{ textDecoration: 'none' }}
            activeClassName={styles.active} to="/contact">
              <div className={styles.contact}>
                <div className={styles.icon}>
                  <FiPhoneCall />
                </div>
                <p className={styles.number}>
                  <span>Контакты:</span> 067 215 9888
                </p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
            style={{ textDecoration: 'none' }}
              activeClassName={styles.active}
              className={styles.cartWrap}
              to="/cart">
            
                <div className={styles.cartMobile}><FiShoppingCart/></div>
                <h3 className={styles.cart}>Корзина</h3>
                <div className={styles.counter}>0</div>
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
