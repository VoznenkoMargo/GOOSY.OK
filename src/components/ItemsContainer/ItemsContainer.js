/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from 'react';
import Item from "../Item/Item";
import styles from './ItemsContainer.module.scss';
// import Preloader from '../Preloader/Preloader';


const ItemsContainer = ({items}) => {
        // const { items, isLoading} = props;
        return (
              <section className={styles.root}>
                  {/* <GoBack history={history}/> */}
                      <div className={styles.itemsContainer}>
                          {/* {isLoading
                              ? <Preloader color="secondary" size={60} />
                              : <>{items.map(({itemNo, ...args}) => <Item  key={itemNo} itemNo={itemNo} {...args} />)}</>} */}
                              {items.map(({itemNo, ...args}) => <Item  key={itemNo} itemNo={itemNo} {...args} />)}
                      </div>
              </section>
        );
};

export default ItemsContainer;
