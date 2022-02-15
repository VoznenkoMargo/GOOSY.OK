/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";
import styles from "./HomePage.module.scss";

// import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";

function HomePage() {
  const items = useSelector((store) => store.items.items).slice(0, 12);
  const { searchItems, isSearched } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(initCardItemsCreator());
    }
  }, [items, searchItems]);

  return (
    <div>
      <Carousel />
      {!isSearched && <ItemsContainer header="Popular dishes" items={items} />}
      {isSearched && (
        <ItemsContainer header="Search results" items={searchItems} />
      )}
      {isSearched && !searchItems.length && (
        <div className={styles.container}>
          <p className={styles.text}>Sorry, nothing found...</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
