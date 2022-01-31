import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../Header.module.scss";

function CartBtn() {
  return (
    <div className={styles.cartWrap}>
      <div className={styles.cartMobile}>
        <FiShoppingCart />
      </div>
      <h3 className={styles.cart}>Cart</h3>
      <div className={styles.counter}>0</div>
    </div>
  );
}

export default CartBtn;
