import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './FooterNav.module.scss'

 function FooterNav() {
  return (
      <div className={styles.FooterNav}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about" className={styles.footerNav_link}>About the Restaurant</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shipments" className={styles.footerNav_link}>Shipping and Delivery</NavLink>
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
}

export default FooterNav;