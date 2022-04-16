/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import styles from "./CartPage.module.scss";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems)


  return (
    <section>
      {cartItems.length > 0 ? (
        <CartItemContainer cartItems={cartItems}/>
      ) : (
        <div className={styles.container}>
          <ArrowBack />
          <h1 className={styles.title}>Cart is empty</h1>
        </div>
      )}
    </section>
  );
}

export default CartPage;
