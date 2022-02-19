/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProductToUserWishlist, getUserWishlist, deleteProductFromUserWishlist, deleteUserWishlist } from "../../store/actionCreators/wishlistItemsCreator";

import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./Item.module.scss";

function Item(props) {
  const { itemNo, imageUrls, categories, name, currentPrice, weight, count, _id } = props;

const dispatch = useDispatch();
const {wishlistItems, isFavoriteItems} = useSelector(store => store.wishlist)


useEffect(() => {
  dispatch(getUserWishlist())
}, [isFavoriteItems])




  return (
    <div className={styles.item} key={itemNo}>
      {count ? <span className={styles.cartCircle}>{count}</span> : ""}

      {wishlistItems.find((element)=>(element._id === _id)) ? 
      <FontAwesomeIcon  
      icon={faHeart}
      size="2x"
      className={styles.item_favorite_active}
      onClick={
        ()=>{
          if(wishlistItems.length===1){
          dispatch(deleteUserWishlist())
          }else
        dispatch(deleteProductFromUserWishlist(_id))
        dispatch(getUserWishlist())
      }
    }/> : 
      <FontAwesomeIcon  
       icon={faHeart}
       size="2x"
       className={styles.item_favorite}
       onClick={
         ()=>{
         dispatch(addProductToUserWishlist(_id))
         dispatch(getUserWishlist())
       }
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
