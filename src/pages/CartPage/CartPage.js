/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import styles from "./CartPage.module.scss";
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";

// import ModalEmptyCart from "../../components/ModalEmptyCart/ModalEmptyCart";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <section>
      {cartItems.length > 0 ? (
        <CartItemContainer cartItems={cartItems} />
      ) : (
        <h1 className={styles.title}>Cart is empty</h1>
        // <ModalEmptyCart />
      )}
    </section>
  );
}

export default CartPage;
