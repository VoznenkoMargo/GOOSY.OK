/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./OrderPage.module.scss";

function OrderPage() {
  return (
    <div className={styles.orderContainer}>
      <h1 className={styles.orderTitle}>We'll call you back in 5 minutes!</h1>

      <img
        src="https://media.giphy.com/media/XGPbVDSbBm70i0P2P4/giphy.gif"
        alt="waiting img"
        className={styles.orderImg}
      />
    </div>
  );
}

export default OrderPage;
