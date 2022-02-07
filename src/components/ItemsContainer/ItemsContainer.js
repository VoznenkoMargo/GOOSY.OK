/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
// import Preloader from "../Preloader/Preloader";
import flames from "../../assets/flames.png";

const ItemsContainer = (props) => {
  const {
    items,
    // isLoading,
    header,
  } = props;

  const match = useRouteMatch("/products");
  console.log(match);

  return (
    <div className="container">
      <div className={styles.itemsWrapper}>
        <h2 className={styles.items_header}>{header}</h2>
        <img alt="" width="30px" src={flames} />
      </div>

      {match.path !== "/products" && (
        <Link className={styles.allProducts} to="/products">
          To all dishes
        </Link>
      )}

      <div className={styles.itemsContainer}>
        {/* {isLoading ? (
          <Preloader className={styles.preloader} color="secondary" size={60} />
        ) : ( */}

        {items.length > 0 &&
          items.map(({ itemNo, ...args }) => (
            <Item key={itemNo} itemNo={itemNo} {...args} />
          ))}

        {!items.length && (
          <p className={styles.nothingFound}>Nothing found :(</p>
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
