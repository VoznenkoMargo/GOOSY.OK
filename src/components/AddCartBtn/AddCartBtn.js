import React from "react";
import { ReactComponent as Cart } from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss";

function AddCartBtn() {
  return (
    <div className={styles.backgroundBtn} aria-hidden>
      <p>Add to Cart</p>
      <Cart />
    </div>
  );
}

export default AddCartBtn;
