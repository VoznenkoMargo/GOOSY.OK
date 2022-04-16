/* eslint-disable import/namespace */
/* eslint-disable no-underscore-dangle */

import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import ArrowBack from "../ArrowBack/ArrowBack";

import styles from "./CartItemContainer.module.scss";
import {
  deleteProductFromCartCreator,
  decreaseProductFromCartCreator,
  addToCartCreator,
  deleteCartCreator,
  decreaseProductFromLsCreator,
  addToLsCreator,
  deleteProductFromLsCreator,
} from "../../store/actionCreators/cartItemsCreator";

function CartItemContainer(props) {
  const { cartItems } = props;
  const dispatch = useDispatch();

  const handleClickDecrease = (id, cartItem) => {
    dispatch(decreaseProductFromCartCreator(id));
    dispatch(decreaseProductFromLsCreator(cartItem));
  };
  const handleClickAdd = (id, cartItem) => {
    dispatch(addToCartCreator(id));
    dispatch(addToLsCreator(cartItem));
  };
  const handleClickDeleteFromCart = (id, cartItem) => {
    dispatch(deleteProductFromCartCreator(id));
    dispatch(deleteProductFromLsCreator(cartItem))
  };
  const handleClickDeleteCart = () => {
    dispatch(deleteCartCreator());
  };


  return (
    <div className={styles.mainCartContainer}>
      <ArrowBack />
      <div className={styles.cartTitle}>CART</div>
      <div className={styles.container}>

      {cartItems.length > 0 &&
          cartItems.map((item) => {
          return (
            <div className={styles.itemCard} key={item._id}>
              <Link
                to={`/products/${item.product.itemNo}`}
                style={{ textDecoration: "none", width: "80%" }}
              >
                <img src={item.product.imageUrls} alt="foodImage" />
              </Link>
              <div className={styles.orderDetails}>
                <Link
                  to={`/products/${item.product.itemNo}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.info}>
                    <h3 className={styles.name}>{item.product.name}</h3>
                    <p className={styles.description}>
                      {item.product.description}
                    </p>
                  </div>
                </Link>
                <div className={styles.addToCart}>
                  <div className={styles.plusMinus}>
                    <FaMinus
                      className={styles.minus}
                      fill="#fff"
                      size={20}
                      onClick={() => handleClickDecrease(item.product._id, item)}
                    />
                    <h4>{item.cartQuantity}</h4>
                    <FaPlus
                      className={styles.plus}
                      fill="#fff"
                      size={20}
                      onClick={() => handleClickAdd(item.product._id, item.product)}
                    />
                  </div>
                  <p className={styles.currentPrice}>
                    Price: {item.product.currentPrice * item.cartQuantity} $
                  </p>
                  <div className={styles.delete}>
                    <AiTwotoneDelete
                      onClick={() => handleClickDeleteFromCart(item.product._id, item.product._id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.totalPrice}>
        <h2 className={styles.priceTitle}>
          Total price:
          <span className={styles.currentPrice}>
            {cartItems
              .map((item) => item.cartQuantity * item.product.currentPrice)
              .reduce((a, b) => a + b)}
            $
          </span>
        </h2>
        <NavLink to="order" className={styles.order} onClick={handleClickDeleteCart}>Place an order</NavLink>
      </div>
    </div>
  );
}

CartItemContainer.propTypes = {
  cartItems: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    description: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    itemNo: PropTypes.string,
    map: PropTypes.func,
    length: PropTypes.number,
  }),
};

CartItemContainer.defaultProps = {
  cartItems: PropTypes.shape({
    _id: 0,
    name: "",
    count: 0,
    currentPrice: 0,
    description: "",
    imageUrls: [""],
    itemNo: "",
  }),
};

export default React.memo(CartItemContainer);
