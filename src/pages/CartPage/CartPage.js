/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import styles from "./CartPage.module.scss";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <section>
      <div className={styles.cartPage}>
        <div className={styles.cartPage_back}>
          <ArrowBack />
        </div>
      </div>
      {cartItems.length > 0 ? (
        <CartItemContainer cartItems={cartItems} />
      ) : (
        <h1 className={styles.title}>Cart is empty</h1>
      )}
    </section>
  );
}

export default CartPage;
