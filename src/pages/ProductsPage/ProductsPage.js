/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";
import styles from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const items = useSelector((store) => store.items.items);
  const { searchItems, isSearched } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardItemsCreator());
    return () => {
      dispatch(clearSearchItemsCreator());
    };
  }, []);

  return (
    <div>
      {!isSearched && <ItemsContainer header="All dishes" items={items} />}

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
};

export default ProductsPage;
