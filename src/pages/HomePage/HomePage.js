
/* eslint-disable consistent-return */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";
import styles from "./HomePage.module.scss";

function HomePage() {
  const products = useSelector((store) => store.items.items);
  const items = useMemo(() => products.slice(0, 12), [products]);
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
      {!isSearched ? (
        <ItemsContainer header="Popular dishes" items={items} />
      ) : (
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
