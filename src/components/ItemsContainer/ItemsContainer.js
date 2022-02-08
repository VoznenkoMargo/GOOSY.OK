/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import Preloader from "../Preloader/Preloader";
import flames from "../../assets/flames.png";

const ItemsContainer = (props) => {
  const { items, isLoading, header } = props;

  // const cartArray = useSelector((state) => {
  //   return state.cart.cartItems;
  // });
  // for (let i = 0; i < items.length; i += 1) {
  //   for (let j = 0; j < cartArray.length; j += 1) {
  //     if (items[i].itemNo === cartArray[j].itemNo) {
  //       items[i] = { ...items[i], ...cartArray[j] };
  //     }
  //   }
  // }


  return (
    <div className="container">
      <div className={styles.itemsWrapper}>
        <h2 className={styles.items_header}>{header}</h2>
        <img alt="" width="40px" src={flames} />
      </div>
      <div className={styles.itemsContainer}>
        {isLoading ? (
          <Preloader className={styles.preloader} color="secondary" size={60} />
        ) : (
          items && items.map(({ itemNo, ...args }) => (
            <Item key={itemNo} itemNo={itemNo} {...args} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
