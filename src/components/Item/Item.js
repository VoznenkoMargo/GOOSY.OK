/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToUserWishlist,
  deleteProductFromUserWishlist,
  deleteUserWishlist,
} from "../../store/actionCreators/wishlistItemsCreator";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./Item.module.scss";
import PopoverHeart from "../Popover/Popover";

function Item(props) {
  const { itemNo, imageUrls, categories, name, currentPrice, weight, _id } =
    props;

  const cartArray = useSelector((state) => state.cart.cartItems);
  const count = cartArray?.find((item) => item.product._id === _id)?.cartQuantity;

  const dispatch = useDispatch();
  const { wishlistItems, isLoading } = useSelector((store) => store.wishlist);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  function handleAddWishlistItem(id) {
    handlePopoverClose();
    if (!isLoading) dispatch(addProductToUserWishlist(id));
    
  }

  function handleDeleteWishlistItem(id) {
    handlePopoverClose();
    if (!isLoading)
      if (wishlistItems.length === 1) {
        dispatch(deleteUserWishlist());
      } else dispatch(deleteProductFromUserWishlist(id));
  }

  const inWishlist = <>
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          className={styles.item_favorite_active}
          onClick={() => {
            handleDeleteWishlistItem(_id);
          }}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
        <PopoverHeart
          open={open}
          anchorEl={anchorEl}
          handlePopoverClose={handlePopoverClose}
          popText="Remove from wishlist"
        />
  </>

const notInWishlist = <>
      <FontAwesomeIcon
        icon={faHeart}
        size="2x"
        className={styles.item_favorite}
        onClick={() => {
          handleAddWishlistItem(_id);
        }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <PopoverHeart
        open={open}
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
        popText="Add to wishlist"
      />
  </>

  return (
    <div className={styles.item} key={itemNo}>
      {count ? <span className={styles.cartCircle}>{count}</span> : ""}
      {wishlistItems.find((element) => element._id === _id) ? (inWishlist) : (notInWishlist)}

      <Link to={`/products/${itemNo}`} style={{ textDecoration: "none" }}>
        <img src="https://vegconomist.com/wp-content/uploads/sites/3/Ohayo-Valley.jpg" alt="foodImage" alt="dish" />
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
        <h2 className={styles.price}>{currentPrice} $</h2>
        <AddCartBtn cartItem={props} />
      </div>
    </div>
  );
}

Item.propTypes = {
  _id: PropTypes.string,
  itemNo: PropTypes.elementType.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.string,
  name: PropTypes.string,
  currentPrice: PropTypes.number,
  weight: PropTypes.number,
};

Item.defaultProps = {
  _id: "",
  imageUrls: [""],
  categories: "",
  name: "",
  currentPrice: 0,
  weight: 0,
};

export default React.memo(Item);
