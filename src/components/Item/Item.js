/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import { HiPlus, HiMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function Item({ itemNo, imageUrls, name, currentPrice, weight }) {
  return (
    <Link to={`/products/${itemNo}`} style={{ textDecoration: "none" }}>
      <div className={styles.item} key={itemNo}>
        <img src={imageUrls} alt="dish" />
        <div>
          <div className={styles.cardStyles}>
            <div className={styles.mainInfo}>
              <p className={styles.title}>{name}</p>
              <p className={styles.weight}>{weight} g</p>
            </div>
          </div>
          <div className={styles.priceInfo}>
            <h2 className={styles.price}>{currentPrice} ₴</h2>
            <AddCartBtn />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;