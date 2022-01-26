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
            <Link to="/about" className={styles.footerInfo_link}>O нас</Link>
        </li>
        <li>
            <Link to="/news" className={styles.footerInfo_link}>Новости и события</Link>
        </li>
        <li>
            <Link to="/agreement" className={styles.footerInfo_link}>Пользовательское соглашение</Link>
        </li>
        <li>
            <Link to="/map" className={styles.footerInfo_link}>Карта сайта</Link>
        </li>
        <li>
            <Link to="/confidentiality" className={styles.footerInfo_link}>Политика конфиденциальности</Link>
        </li>
    </ul>
    </nav>
    </div>
  )

  
}

export default FooterInfo;
