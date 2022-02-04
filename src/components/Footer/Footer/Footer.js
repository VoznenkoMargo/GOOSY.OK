/* eslint-disable no-unreachable */
import React from "react";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterNav from "../FooterNav/FooterNav";
import styles from "./Footer.module.scss";
import FooterSocial from "../FooterSocial/FooterSocial";
// import ScrollToTopBtn from "../../ScrollTopBtn/ScrollToTopBtn";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <FooterSocial />
        <FooterInfo />
        <FooterNav />  
        {/* <ScrollToTopBtn /> */}
      </div>
    </div>
  );
}

export default Footer;
