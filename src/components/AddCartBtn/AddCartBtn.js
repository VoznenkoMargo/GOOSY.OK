/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";
import { addToCartCreator } from "../../store/actionCreators/cartItemsCreator";

function AddCartBtn(props) {
  const dispatch = useDispatch();
  const { cartItem } = props;
  const handleClick = () => {
    dispatch(addToCartCreator(cartItem));
  };

  return (
    <button
      type="button"
      className={styles.backgroundBtn}
      aria-hidden
      onClick={() => handleClick()}
    >
      <p>Add to Cart</p>
      <Cart />
    </button>
  );
}

export default AddCartBtn;
