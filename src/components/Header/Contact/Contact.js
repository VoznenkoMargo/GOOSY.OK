import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import styles from "../Header.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.icon}>
        <FiPhoneCall />
      </div>
      <a className={styles.number} href="tel: +380672159888">
        <span>Contacts:</span> 067 215 9888
      </a>
    </div>
  );
}

export default Contact;
