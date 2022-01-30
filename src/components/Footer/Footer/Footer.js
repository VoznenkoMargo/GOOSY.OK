import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterNav from "../FooterNav/FooterNav";
import styles from "./Footer.module.scss";
import FooterSocial from "../FooterSocial/FooterSocial";

function Footer() {
<<<<<<< HEAD
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          size="3x"
          className={styles.footer_chevron}
        />
        <FooterInfo />
        <FooterNav />
        <FooterSocial />
      </div>
      <p className={styles.footer_rights}>
        «GOOS.OK» All Rights Reserved. 2021 - 2022
      </p>
    </div>
  );
=======
  return <div className={styles.footer}><div className={styles.footer_container}>
  <FontAwesomeIcon icon={faChevronCircleUp} size="5x" className={styles.footer_chevron} onClick={() =>{
    window.scrollTo({
    top: 0, 
    behavior: 'smooth'})}}/>
  <FooterInfo />
  <FooterNav />
  <FooterSocial/>
</div>
<p className={styles.footer_rights}>«GOOS.OK» All Rights Reserved. 2021 - 2022</p>
</div>
  
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
}

export default Footer;
