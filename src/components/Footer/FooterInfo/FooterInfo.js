import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterInfo.module.scss';

function FooterInfo() {
  return (
      <div className={styles.footerInfo}>   
          <h2>GOOS.OK</h2>  
          
    <nav>
    <ul>
        <li>
            <Link to="/about" className={styles.footerInfo_link}>About Us</Link>
        </li>
        <li>
            <Link to="/news" className={styles.footerInfo_link}>News and Events</Link>
        </li>
        <li>
            <Link to="/agreement" className={styles.footerInfo_link}>User Agreement</Link>
        </li>
        <li>
            <Link to="/map" className={styles.footerInfo_link}>Site Map</Link>
        </li>
        <li>
            <Link to="/confidentiality" className={styles.footerInfo_link}>Privacy Policy</Link>
        </li>
    </ul>
    </nav>
    </div>
  )

  
}

export default FooterInfo;
