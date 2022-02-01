/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import ArrowBack from "../ArrowBack/ArrowBack";
import styles from "./CartItemContainer.module.scss";

function CartItemContainer({ cartItems }) {
  const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {cartItems.length === 0 && <h1>Корзина пустая</h1>}

      <div className={styles.container}>
        <ArrowBack />
        <div className={styles.cartTitle}>CART</div>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return (
              <div className={styles.itemCard} key={item.id}>
                <img src={item.imageUrls} alt="foodImage" />
                <div className={styles.orderDetails}>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>

                  <div className={styles.addToCart}>
                    <div className={styles.plusMinus}>
                      <FaMinus
                        className={styles.minus}
                        fill="#fff"
                        size={20}
                        onClick={decrement}
                      />
                      <h4>{count}</h4>
                      <FaPlus
                        className={styles.plus}
                        fill="#fff"
                        size={20}
                        onClick={increment}
                      />
                    </div>
                    <p className={styles.currentPrice}>
                      Price: {item.currentPrice} ₴
                    </p>
                    <div className={styles.delete}>
                      <AiTwotoneDelete />
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
              {" "}
              {cartItems.reduce((sum, price) => sum + price.currentPrice, 0)} ₴
            </span>
          </h2>
          <div className={styles.order}>Place an order</div>
        </div>
      </div>
    </>
  );
}

export default CartItemContainer;
