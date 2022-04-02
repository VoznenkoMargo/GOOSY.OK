/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import styles from "./CardNewsAndEventsGoosePage.module.scss";

function CardNewsAndEventsGoosePage() {
  return (
    <div className={styles.cardNewsAndEventsGoosePage}>
      <div className={styles.cardNewsAndEventsGoosePage_back}>
        <ArrowBack />
      </div>
      <h2>Goose Day</h2>
      <p>
        Goose Day was unofficially started in 1786 in Pennsylvania in the
        Juniata River Valley, and has officially been celebrated in Mifflin
        County since 1973, and Juniata County since 1976. It stemmed from
        Michaelmas, a Christian holiday celebrating the archangel Michael, and a
        day when geese are often eaten. In 1786 a Dutchman named Andrew Pontius
        hired an Englishman named Archibald Hunter. In their contract it said
        that accounts would be settled each year on September 29. When the day
        came, Hunter showed up at Pontius' door with not only his accounts, but
        with a goose under his arm. As Pontius was confused, Hunter explained to
        him how the goose signified good luck for the following year, and how in
        England he had celebrated Michaelmas. Goose Day became popular in the
        Juniata River Valley and eventually became an established day in the two
        aforementioned counties. Festivals take place in those counties on the
        day, and events happen on the week surrounding it.
      </p>
      <h3>How to Observe Goose Day</h3>
      <p>
        If you happen to be in Mifflin or Juniata County, there are many
        activities happening during the day. There are goose specials at
        restaurants across the area and an annual run. If you aren't in the
        area, the best way to celebrate the day is by eating goose. If you have
        children you could read them some Mother Goose nursery rhymes, or play
        "Duck, Duck, Goose" with them.
      </p>
      <h3>Wow, wow, wow!</h3>
      <p>Especially for you on this day, a 25% discount on goose dishes.</p>
    </div>
  );
}

export default CardNewsAndEventsGoosePage;
