/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProductToUserWishlist, deleteProductFromUserWishlist, deleteUserWishlist } from "../../store/actionCreators/wishlistItemsCreator";

import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./Item.module.scss";

function Item(props) {
  const { itemNo, imageUrls, categories, name, currentPrice, weight, count, _id } = props;

const dispatch = useDispatch();
const {wishlistItems} = useSelector(store => store.wishlist)

function handleAddWishlistItem(id) {
  dispatch(addProductToUserWishlist(id))
}

function handleDeleteWishlistItem(id) {
  if(wishlistItems.length === 1){
    dispatch(deleteUserWishlist())
    }else
  dispatch(deleteProductFromUserWishlist(id))
}


  return (
    <div className={styles.item} key={itemNo}>
      {count ? <span className={styles.cartCircle}>{count}</span> : ""}

      {wishlistItems.find((element)=>(element._id === _id)) ? 
      <FontAwesomeIcon  
      icon={faHeart}
      size="2x"
      className={styles.item_favorite_active}
      onClick={()=>{handleDeleteWishlistItem(_id)}
    }/> : 
      <FontAwesomeIcon  
       icon={faHeart}
       size="2x"
       className={styles.item_favorite}
       onClick={()=>{handleAddWishlistItem(_id)}
      }
       />}
      



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

export default Item;
