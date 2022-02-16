import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function Item(props) {
  const { itemNo, imageUrls, categories, name, currentPrice, weight, count } =
    props;

  return (
    <div className={styles.item} key={itemNo}>
      {count ? <span className={styles.cartCircle}>{count}</span> : ""}

      <Link to={`/products/${itemNo}`} style={{ textDecoration: "none" }}>
        <img src={imageUrls} alt="dish" />
        <div>
          <div className={styles.cardStyles}>
            <p className={styles.weight}>{categories}</p>
            <div className={styles.mainInfo}>
              <p className={styles.title}>{name}</p>
              <p className={styles.weight}>{weight} g</p>
            </div>
          </div>
        </div>
      </Link>

      <div className={styles.priceInfo}>
        <h2 className={styles.price}>{currentPrice} ₴</h2>
        <AddCartBtn cartItem={props} />
      </div>
    </div>
  );
}

Item.propTypes = {
  itemNo:PropTypes.elementType.isRequired,
  imageUrls:PropTypes.arrayOf(PropTypes.string).isRequired,
  categories:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  weight:PropTypes.number.isRequired,
  count:PropTypes.number
}

Item.defaultProps = {
  count: 0,
} 

export default Item;
