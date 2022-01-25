/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import { HiPlus, HiMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";


function Item({ itemNo, imageUrls, name, currentPrice, categories, weight, description }) {
  return (
    <Link to={`/products/${itemNo}`}>
    <div className={styles.container}>
        <div className={styles.item} key={itemNo}>
          <img src={imageUrls} alt="dish" />
          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{name}</div>
              <div className={styles.weight}>{weight} </div>
            </div>
            <p className={styles.categories}>{categories}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.priceInfo}>
            <h2 className={styles.price}>{currentPrice}</h2>
            <AddCartBtn />
          </div>
        </div>
    </div>
    </Link>
  );
}

export default Item;
