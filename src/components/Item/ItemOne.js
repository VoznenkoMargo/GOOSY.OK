import React from "react";
import PropTypes from "prop-types";

import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function Item({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div className={styles.item} key={item._id}>
          <img src={item.imageUrls} alt="dish" />

          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            {/* <p className={styles.description}>{item.description}</p> */}
          </div>

          <div className={styles.priceInfo}>
            <h2 className={styles.price}>{item.currentPrice}</h2>
            <AddCartBtn />
          </div>
        </div>
      ))}

      {/* {itemsAdded.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.dishCount}>
            <p>3</p>
          </div>
          <img src={item.img} alt="dish" />
          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.priceInfo}>
            <div className={styles.plus}>
              <HiPlus />
            </div>
            <h2 className={styles.price}>{item.price}</h2>
            <div className={styles.minus}>
              <HiMinus />
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,    
    name: PropTypes.string,
    currentPrice: PropTypes.number,    
    imageUrls: PropTypes.arrayOf(PropTypes.string),  

  })
}

Item.defaultProps = {
  item: PropTypes.shape({
    _id:0,
    name: "",
    currentPrice: 0,
    imageUrls: [""],     

  })
}

export default Item;
