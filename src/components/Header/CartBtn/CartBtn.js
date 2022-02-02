import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { shallowEqual, useSelector } from "react-redux";
import styles from "../Header.module.scss";

function CartBtn() {
  const counter = useSelector((state) => state.cart.counter, shallowEqual);
  console.log(counter);
  return (
    <div className={styles.cartWrap}>
      <div className={styles.cartMobile}>
        <FiShoppingCart />
      </div>
      <h3 className={styles.cart}>Cart</h3>
      <div className={styles.counter}>{counter}</div>
    </div>
  );
}

export default CartBtn;
