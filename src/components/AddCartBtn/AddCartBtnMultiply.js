/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {Notify} from "notiflix";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";
// eslint-disable-next-line import/named
import { addToCartMultiplyCreator } from "../../store/actionCreators/cartItemsCreator";

function AddCartBtnMultiply(props) {

  const dispatch = useDispatch();

  const { cartItem, countDetail } = props;
  
  const handleClick = () => {
    dispatch(addToCartMultiplyCreator(cartItem, countDetail));
    Notify.success(`${countDetail} ${cartItem.name} added to cart`);

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

AddCartBtnMultiply.propTypes = {
  cartItem: PropTypes.shape({
    _id: PropTypes.string,    
    name: PropTypes.string,
    count: PropTypes.number,
    currentPrice: PropTypes.number, 
    description: PropTypes.string,   
    imageUrls: PropTypes.arrayOf(PropTypes.string),  
    itemNo: PropTypes.string,
    
  }),
  countDetail: PropTypes.number,
}

AddCartBtnMultiply.defaultProps = {
  cartItem: PropTypes.shape({
    _id:0,
    name: "",
    count: 0,
    currentPrice: 0,
    description: "",
    imageUrls: [""], 
    itemNo: "",    

  }),
  countDetail: 0,
}
export default AddCartBtnMultiply;
