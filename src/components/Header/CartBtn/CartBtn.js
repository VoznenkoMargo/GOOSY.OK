import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { getFromLS } from "../../../utils/localStorage";
import styles from "../Header.module.scss";
import { GET_CART } from "../../../store/actions/cartItemsActions";

function CartBtn() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.counter);

  useEffect(() => {
    const cart = getFromLS("cart");
    if (cart) {
      dispatch({ type: GET_CART, payload: cart });
    }
  }, [dispatch]);
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
