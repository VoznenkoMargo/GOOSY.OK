/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";
import { addToCartCreator } from "../../store/actionCreators/cartItemsCreator";
// import { updatedProduct } from "../../axios";

function AddCartBtn(props) {
  const dispatch = useDispatch();
  const { cartItem } = props;
  // const newCartItem = {
  //   cartItem,
  //   inCart: true,
  // };
  const handleClick = () => {
    // const { data } = updatedProduct(cartItem._id, { cartItem, newCartItem });
    // console.log(data);
    dispatch(addToCartCreator(cartItem));
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

export default AddCartBtn;
