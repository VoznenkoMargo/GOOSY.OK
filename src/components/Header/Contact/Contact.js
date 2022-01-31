import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import styles from "../Header.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.icon}>
        <FiPhoneCall />
      </div>
      <p className={styles.number}>
        <span>Contacts:</span> 067 215 9888
      </p>
    </div>
  );
}

export default Contact;
