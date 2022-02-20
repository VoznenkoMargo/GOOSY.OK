import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "./HeartFromWishlist.module.scss";

function HeartFromWishlist() {
 const {wishlistItems} = useSelector(store => store.wishlist);

  return ( <div className={styles.heartFromWishlist}>
{wishlistItems.length ? 
  <FontAwesomeIcon  
        icon={faHeart}
        size="2x"
        color="#79b382"
        /> :
        <FontAwesomeIcon  
        icon={faHeart}
        size="2x"
        />}
        <span>{wishlistItems.length > 0 ? wishlistItems.length : null}</span>
  </div>  
  )
}

export default HeartFromWishlist;