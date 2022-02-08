import React from 'react';
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import CardNewsAndEvents from './CardNewsAndEvents/CardNewsAndEvents';
import updateImage from "../../../assets/img/update.png";
import holidayImage from "../../../assets/img/holiday.jpg";
import gooseDayImage from "../../../assets/img/gooseDay.png";
import masterClassImage from "../../../assets/img/masterClass.jpg";
import styles from "./NewsAndEventsPage.module.scss";

function NewsAndEventsPage() {
  return <div className={styles.news_and_events}>
      <div className={styles.news_and_events_back}>
        <ArrowBack />
      </div>
      <h2>News And Events</h2>
<div className={styles.news_and_events_cards}>
    <CardNewsAndEvents 
     title="Working hours during the holidays"
     imageUrl={holidayImage}/>

    <CardNewsAndEvents 
     title="Site in a test mode"
     imageUrl={updateImage}/>

    <CardNewsAndEvents 
     title="Goose Day"
     imageUrl={gooseDayImage}/>

    <CardNewsAndEvents 
     title="Master Class"
     imageUrl={masterClassImage}/>

</div>
     



  </div>;
}

export default NewsAndEventsPage;
