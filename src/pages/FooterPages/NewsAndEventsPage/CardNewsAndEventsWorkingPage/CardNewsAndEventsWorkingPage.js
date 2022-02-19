import React from 'react';
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import styles from './CardNewsAndEventsWorkingPage.module.scss';

function CardNewsAndEventsWorkingPage() {
    
  return <div className={styles.cardNewsAndEventsWorkingPage}>
      <div className={styles.cardNewsAndEventsWorkingPage_back}>
        <ArrowBack />
      </div>
        <h2>Working hours during the holidays</h2>
      <p>
      Opening hours on public holidays reduced by 1 hour, please order early.
      </p>
      <p>WE WORK FROM 10 TO 22:00</p>
      <p>
      We wish you all happy holidays!
      </p>


  </div>;
}

export default CardNewsAndEventsWorkingPage;
