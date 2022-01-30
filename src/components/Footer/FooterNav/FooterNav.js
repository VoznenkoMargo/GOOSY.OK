import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FooterNav.module.scss";

function FooterNav() {
  return (
<<<<<<< HEAD
    <div className={styles.FooterNav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/about" className={styles.footerNav_link}>
              About the Restaurant
            </NavLink>
          </li>
          <li>
            <NavLink to="/shipments" className={styles.footerNav_link}>
              Shipping and Delivery
            </NavLink>
          </li>
          <li>
            <NavLink to="/returns" className={styles.footerNav_link}>
              Return Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/stock" className={styles.footerNav_link}>
              Stock
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
=======
      <div className={styles.FooterNav}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about-restauraunt" className={styles.footerNav_link}>About the Restaurant</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment-and-delivery" className={styles.footerNav_link}>Payment and Delivery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/returns" className={styles.footerNav_link}>Return Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stock" className={styles.footerNav_link}>Stock</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
  )
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
}

export default FooterNav;
