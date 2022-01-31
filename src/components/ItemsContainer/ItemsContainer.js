/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from "react";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import Preloader from "../Preloader/Preloader";
import flames from "../../assets/flames.png";

const ItemsContainer = (props) => {
  const { items, isLoading, header } = props;
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.itemsWrapper}>
          <h2 className={styles.items_header}>{header}</h2>
          <img alt="" width="40px" src={flames} />
        </div>
        {/* <GoBack history={history}/> */}
        <div className={styles.itemsContainer}>
          {isLoading ? (
            <Preloader
              className={styles.preloader}
              color="secondary"
              size={60}
            />
          ) : (
            <>
              {items.map(({ itemNo, ...args }) => (
                <Item key={itemNo} itemNo={itemNo} {...args} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemsContainer;
