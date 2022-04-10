import React from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
// import { getFromLS } from "../../../utils/localStorage";
// import { getCartCreator } from "../../../store/actionCreators/cartItemsCreator";
import styles from "../Header.module.scss";
// import { GET_CART } from "../../../store/actions/cartItemsActions";

function CartBtn() {
  const { cartItems } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   const cart = getFromLS("cart");
  //   if (cart) {
  //     dispatch({ type: GET_CART, payload: cart });
  //   }
  // }, [dispatch]);
  return (
    <div className={styles.cartWrap}>
      <div className={styles.cartMobile}>
        <FiShoppingCart />
      </div>
      <h3 className={styles.cart}>Cart</h3>
      <div className={styles.counter}>
        {cartItems === undefined || !cartItems.length
          ? 0
          : cartItems
              ?.map((item) => item.cartQuantity)
              .reduce((a, b) => a + b, 0)}
      </div>
    </div>
  );
}

export default CartBtn;
