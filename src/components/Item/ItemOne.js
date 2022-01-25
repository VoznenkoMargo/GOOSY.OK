/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import { HiPlus, HiMinus } from "react-icons/hi";
import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function Item({items}) {

  return (
    <div >
      {items.map((item) => (
        <div className={styles.item} key={item._id}>
          <img src={item.imageUrls} alt="dish" />

          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            {/* <p className={styles.description}>{item.description}</p> */}
          </div>

          <div className={styles.priceInfo}>
            <h2 className={styles.price}>{item.currentPrice}</h2>
            <AddCartBtn />
          </div>
        </div>
      ))}

      {/* {itemsAdded.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.dishCount}>
            <p>3</p>
          </div>
          <img src={item.img} alt="dish" />
          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.priceInfo}>
            <div className={styles.plus}>
              <HiPlus />
            </div>
            <h2 className={styles.price}>{item.price}</h2>
            <div className={styles.minus}>
              <HiMinus />
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Item;
