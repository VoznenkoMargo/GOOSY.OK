import React from 'react';
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import styles from './CardNewsAndEventsSitePage.module.scss';

function CardNewsAndEventsSitePage() {
    
  return <div className={styles.cardNewsAndEventsSitePage}>
      <div className={styles.cardNewsAndEventsSitePage_back}>
        <ArrowBack />
      </div>
       
      <h2>Site in a test mode</h2>
        <p>We are updating the site is in test mode, we are sorry for the inconveniences.</p>
        <p>We will be thankful for your wishes and comments about the new site, sent them by the form of feedback or e-mail: store@goosyok.ua</p>

  </div>;
}

export default CardNewsAndEventsSitePage;
