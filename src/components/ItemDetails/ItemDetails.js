/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import ArrowBack from "../ArrowBack/ArrowBack";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./ItemDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProductToUserWishlist, getUserWishlist, deleteProductFromUserWishlist, deleteUserWishlist } from "../../store/actionCreators/wishlistItemsCreator";


function ItemDetails({ item }) {

  const dispatch = useDispatch();
  const {wishlistItems, isFavoriteItems} = useSelector(store => store.wishlist)
  useEffect(() => {
    dispatch(getUserWishlist()) 
  }, [isFavoriteItems])

  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.container}>
      <ArrowBack />
      {item.itemNo && (
        <div className={styles.itemCard}>
          <div className={styles.itemImg}>
            <img src={item.imageUrls} alt="foodImage" />
          </div>
          <div className={styles.orderDetails}>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.itemNo}>id: {item.itemNo}</p>
            <p className={styles.weight}>weight: {item.weight} g</p>
            
<div className={styles.count_favorite_block}>
            <div className={styles.plusMinus}>
              <FaMinus
                className={styles.minus}
                fill="#fff"
                size={20}
                onClick={decrement}/>
              <h4>{count}</h4>
              <FaPlus
                className={styles.plus}
                fill="#fff"
                size={20}
                onClick={increment}/>
            </div>

            {wishlistItems.find((element)=>(element._id === item._id)) ? 
      <FontAwesomeIcon  
      icon={faHeart}
      size="2x"
      className={styles.itemDetalis_favorite_active}
      onClick={()=>{
        if(wishlistItems.length === 1){
          dispatch(deleteUserWishlist())
          }else
        dispatch(deleteProductFromUserWishlist(item._id))
        dispatch(getUserWishlist())
      }}/> : 
      <FontAwesomeIcon  
       icon={faHeart}
       size="2x"
       className={styles.itemDetalis_favorite}
       onClick={()=>{
         dispatch(addProductToUserWishlist(item._id))
         dispatch(getUserWishlist())
       }}/>}




            

            <div className={styles.addToCart}>
              <AddCartBtn cartItem={item} />
              <p className={styles.currentPrice}>
                Price: {item.currentPrice} ₴
              </p>
            </div>
    </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default ItemDetails;
