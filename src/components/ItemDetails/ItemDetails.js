/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ArrowBack from "../ArrowBack/ArrowBack";
import styles from "./ItemDetails.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function ItemDetails({ item }) {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.container}>
      <ArrowBack />
      {item.itemNo && (
        <div className={styles.itemCard}>
          <div className={styles.itemImg}>
            <img src={item.imageUrls} alt="foodImage" />
          </div>
          <div className={styles.orderDetails}>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.itemNo}>id: {item.itemNo}</p>
            <p className={styles.weight}>weight: {item.weight} g</p>
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

            <div className={styles.addToCart}>
              <AddCartBtn cartItem={item} />
              <p className={styles.currentPrice}>
                Price: {item.currentPrice} ₴
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
