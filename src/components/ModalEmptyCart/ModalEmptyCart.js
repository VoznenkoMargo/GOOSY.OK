import React from "react";
import FormLogin from "../FormLogin/FormLogin";
import styles from "./ModalEmptyCart.module.scss";
// import Cart from "./cart.svg";

function ModalEmptyCart() {
  return (
    <div className = {styles.modal} >
    <div className={styles.modalContent}>
      <FormLogin />
    
   
    </div>
</div>

  );
}

export default ModalEmptyCart;
