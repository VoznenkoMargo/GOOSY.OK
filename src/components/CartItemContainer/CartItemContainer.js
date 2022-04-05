/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import styles from "./CartItemContainer.module.scss";
import {
  deleteFromCartCreator,
  deleteItemCreator,
  addToCartCreator,
} from "../../store/actionCreators/cartItemsCreator";

function CartItemContainer({ cartItems }) {
  const dispatch = useDispatch();
  const handleClickDelete = (cartItem) => {
    dispatch(deleteFromCartCreator(cartItem));
  };
  const handleClickAdd = (cartItem) => {
    dispatch(addToCartCreator(cartItem));
  };
  const handleClickDeleteItem = (cartItem) => {
    dispatch(deleteItemCreator(cartItem));
  };

  return (
    <>
      {cartItems.length === 0 && <h1>Корзина пустая</h1>}
      <div className={styles.container}>
        <div className={styles.cartTitle}>CART</div>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return (
              <div className={styles.itemCard} key={item.itemNo}>
                <Link to={`/products/${item.itemNo}`} style={{ textDecoration: "none", width: "80%" }}>
                  <img src={item.imageUrls} alt="foodImage" />
                </Link>
                <div className={styles.orderDetails}>
                  <Link to={`/products/${item.itemNo}`} style={{ textDecoration: "none" }}>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{item.name}</h3>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  </Link>
                  <div className={styles.addToCart}>
                    <div className={styles.plusMinus}>
                      <FaMinus
                        className={styles.minus}
                        fill="#fff"
                        size={20}
                        onClick={() => handleClickDeleteItem(item)}
                      />
                      <h4>{item.count}</h4>
                      <FaPlus
                        className={styles.plus}
                        fill="#fff"
                        size={20}
                        onClick={() => handleClickAdd(item)}
                      />
                    </div>
                    <p className={styles.currentPrice}>
                      Price: {item.currentPrice * item.count} ₴
                    </p>
                    <div className={styles.delete}>
                      <AiTwotoneDelete
                        onClick={() => handleClickDelete(item)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className={styles.totalPrice}>
          <h2 className={styles.priceTitle}>
            Total price:
            <span className={styles.currentPrice}>
              {cartItems
                .map((item) => item.count * item.currentPrice)
                .reduce((a, b) => a + b)}
              ₴
            </span>
          </h2>
          <NavLink to="order" className={styles.order} onClick={() => cartItems.forEach(elem => handleClickDelete(elem))}>
            Place an order
          </NavLink>
        </div>
      </div>
    </>
  );
}

CartItemContainer.propTypes = {
  cartItems: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
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

export default CartItemContainer;
