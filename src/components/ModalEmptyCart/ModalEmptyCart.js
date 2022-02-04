import React from "react";
import styles from "./ModalEmptyCart.module.scss";
import Cart from "./cart.svg";

function ModalEmptyCart() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalCcontent}>
          <h3 className={styles.modalTitle}>Название</h3>
          <a href="#close" title="Close" className={styles.close}>
            ×
          </a>

          <div className={styles.modalBbody}>
            <p>Содержимое модального окна...</p>
            <img src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEmptyCart;
