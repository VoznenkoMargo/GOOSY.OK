/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { Notify } from "notiflix";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";
import { addToCartCreator } from "../../store/actionCreators/cartItemsCreator";
import { getFromLS } from "../../utils/localStorage";

function AddCartBtn(props) {
  const dispatch = useDispatch();
  const { cartItem } = props;
  const authToken = getFromLS("authToken");
  const { path } = useRouteMatch();

  const handleClick = () => {
    if (authToken && path === "/products/:itemNo") {
      dispatch(addToCartCreator(cartItem._id));
      Notify.success(`${cartItem.name} added to cart`);
    }
  };

  return (
    <button
      type="button"
      className={styles.backgroundBtn}
      aria-hidden
      onClick={handleClick}
    >
      <p>Add to Cart</p>
      <Cart />
    </button>
  );
}

AddCartBtn.propTypes = {
  cartItem: PropTypes.shape({
    _id: PropTypes.string,
    itemNo: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.string,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    weight: PropTypes.number,
    count: PropTypes.number,
  }),
};

AddCartBtn.defaultProps = {
  cartItem: {
    _id: "",
    itemNo: "",
    imageUrls: [""],
    categories: "",
    name: "",
    currentPrice: 0,
    weight: 0,
    count: 0,
  },
};

export default React.memo(AddCartBtn);
