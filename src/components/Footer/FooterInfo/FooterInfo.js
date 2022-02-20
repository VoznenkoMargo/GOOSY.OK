import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterInfo.module.scss";

function FooterInfo() {
  return (
      <div className={styles.footerInfo}>    
    <nav>
    <ul>
        <li>
            <Link to="/" className={styles.footerInfo_logoName}>GOOSY.OK</Link>
        </li>

        <li>
            <Link to="/news-and-events" className={styles.footerInfo_link}>News and Events</Link>
        </li>
        <li>
            <Link to="/agreement" className={styles.footerInfo_link}>User Agreement</Link>
        </li>
        <li>
            <Link to="/map" className={styles.footerInfo_link}>Site Map</Link>
        </li>
    </ul>
    </nav>
    </div>
  )

}

export default FooterInfo;
