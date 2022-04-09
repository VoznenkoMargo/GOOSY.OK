/* eslint-disable react/jsx-no-bind  */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "./HeartFromWishlist.module.scss";

function HeartFromWishlist({openSignIn}) {
 const {wishlistItems} = useSelector(store => store.wishlist);

 function handleClickUserWishlist(){
      if(!localStorage.getItem("authToken"))
      openSignIn();
 }

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
            onClick={handleClickUserWishlist}
            />}
            <span>{wishlistItems.length > 0 ? wishlistItems.length : null}</span>
      </div>  
      )
}

HeartFromWishlist.propTypes = {
      openSignIn: PropTypes.func,
}

HeartFromWishlist.defaultProps = {
      openSignIn: ()=>{},
    }

export default HeartFromWishlist;