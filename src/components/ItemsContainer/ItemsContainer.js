/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from 'react';
import Item from "../Item/Item";
import styles from './ItemsContainer.module.scss';
import Preloader from '../Preloader/Preloader';



const ItemsContainer = (props) => {
        const {items, isLoading, header} = props;
        console.log(header);
        return (

              <section className={styles.root}>
                  <div className='container'>
                  <div className={styles.itemswrapper}>
                  <h2 className={styles.items_header}>{header}</h2>
                  <img alt='' width='50px' src="https://img.icons8.com/office/16/000000/fire-element.png"/>
                  </div>
                  {/* <GoBack history={history}/> */}
                      <div className={styles.itemsContainer}>
                          {isLoading
                              ? <Preloader className={styles.preloader} color="secondary" size={60} />
                              : <>{items.map(({itemNo, ...args}) => <Item key={itemNo} itemNo={itemNo} {...args} />)}</>}
                      </div>
                      </div>
              </section>
        );
};

export default ItemsContainer;
