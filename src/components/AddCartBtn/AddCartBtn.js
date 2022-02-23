import React from "react";
import PropTypes from "prop-types";
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

AddCartBtn.propTypes ={
  cartItem: PropTypes.shape({
    _id: PropTypes.string,
    itemNo:PropTypes.string,
    imageUrls:PropTypes.arrayOf(PropTypes.string),
    categories:PropTypes.string,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    weight:PropTypes.number,
    count:PropTypes.number
  }),
}

AddCartBtn.defaultProps = {
  cartItem:{
      _id: "",
      itemNo:"",
      imageUrls: [""],
      categories: "",
      name: "",
      currentPrice: 0,
      weight: 0,
      count: 0,
  }
} 

export default AddCartBtn;
