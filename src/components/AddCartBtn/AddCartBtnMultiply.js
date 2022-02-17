/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";
// eslint-disable-next-line import/named
import { addToCartMultiplyCreator } from "../../store/actionCreators/cartItemsCreator";

function AddCartBtnMultiply(props) {

  const dispatch = useDispatch();

  const { cartItem, countDetail } = props;

  const handleClick = () => {
    dispatch(addToCartMultiplyCreator(cartItem, countDetail));
  };

  return (
    <button
      className={styles.backgroundBtn}
      aria-hidden
      onClick={() => handleClick()}
    >
      <p>Add to Cart</p>
      <Cart />
    </button>
  );
}

export default AddCartBtnMultiply;
