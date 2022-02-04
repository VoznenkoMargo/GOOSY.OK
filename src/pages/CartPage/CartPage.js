/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import styles from "./CartPage.module.scss";
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";

// import { getCartCreator } from "../../store/actionCreators/cartItemsCreator";
// import { getFromLS } from "../../utils/localStorage";
// import { GET_CART } from "../../store/actions/cartItemsActions";

// import ModalEmptyCart from "../../components/ModalEmptyCart/ModalEmptyCart";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let cartLS = getFromLS("cart");

  //   if (cartLS) {
  //     dispatch({ type: GET_CART, payload: cartLS });
  //   } else {
  //     dispatch(getCartCreator());
  //   }
  // }, [dispatch]);

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
