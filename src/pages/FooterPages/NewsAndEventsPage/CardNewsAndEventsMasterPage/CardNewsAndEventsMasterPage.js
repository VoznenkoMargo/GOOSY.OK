import React from 'react';
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import styles from './CardNewsAndEventsMasterPage.module.scss';

function CardNewsAndEventsMasterPage() {
    
  return <div className={styles.cardNewsAndEventsMasterPage}>
      <div className={styles.cardNewsAndEventsMasterPage_back}>
        <ArrowBack />
      </div>
        <h2>Master Class</h2>
        <p>Once every three months we hold a goose cooking master class.</p>
        <p>What we will do in the master class:</p>
        <p>- Learn how to festively stuff and cook a real farm goose.</p>
        <p>- Let's make a simple and easy dessert from farm dairy products.</p>
        <p>First we cook, then we eat!</p>
        <p>The cost of the master class is 1500 UAH.</p>
        <p>Limited number of seats.</p>
        <p>Questions and registration by phone: 0672159888</p>
  </div>;
}

export default CardNewsAndEventsMasterPage;
