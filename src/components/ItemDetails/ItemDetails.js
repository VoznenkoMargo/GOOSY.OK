/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Preloader from "../Preloader/Preloader";
import {
  addProductToUserWishlist,
  deleteProductFromUserWishlist,
  deleteUserWishlist,
} from "../../store/actionCreators/wishlistItemsCreator";
import ArrowBack from "../ArrowBack/ArrowBack";
import styles from "./ItemDetails.module.scss";
// import AddCartBtnMultiply from "../AddCartBtn/AddCartBtnMultiply";
import DeleteCartBtn from "../DeleteCartBtn/DeleteCartBtn";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import Comments from "../Comment/Comments";
import {
  decreaseProductFromCartCreator,
  addToCartCreator,
} from "../../store/actionCreators/cartItemsCreator";

function ItemDetails({ item, setFlag, flag }) {
  const { cartItems, isLoadingCart } = useSelector((state) => state.cart);
  const isInCartItem = cartItems.find(
    (itemtoFind) => itemtoFind.product._id === item._id
  )?.cartQuantity;
  const counter = isLoadingCart ? <Preloader /> : isInCartItem;
  const isInCart = !!cartItems.find((i) => i.product._id === item._id);
  const [countDetail, setCountDetail] = useState(1);
  const dispatch = useDispatch();
  const { wishlistItems, isLoading } = useSelector((store) => store.wishlist);

  const handleClickDecrease = (id) => {
    if (countDetail >= 0) {
      setCountDetail(countDetail - 1);
      dispatch(decreaseProductFromCartCreator(id));
    }
  };
  const handleClickAdd = (id) => {
    setCountDetail(countDetail + 1);
    dispatch(addToCartCreator(id));
  };

  function handleAddWishlistItem(id) {
    if (!isLoading) dispatch(addProductToUserWishlist(id));
  }

  function handleDeleteWishlistItem(id) {
    if (!isLoading)
      if (wishlistItems.length === 1) {
        dispatch(deleteUserWishlist());
      } else {
        dispatch(deleteProductFromUserWishlist(id));
      }
  }

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
                <div className={styles.minus}>
                  <FaMinus
                    fill="#fff"
                    size={20}
                    onClick={() => handleClickDecrease(item._id)}
                  />
                </div>

                <h4>{isInCart ? counter : 0}</h4>
                <div className={styles.plus}>
                  <FaPlus
                    fill="#fff"
                    size={20}
                    onClick={() => handleClickAdd(item._id)}
                  />
                </div>
              </div>

              {wishlistItems.find((element) => element._id === item._id) ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  size="2x"
                  className={styles.itemDetalis_favorite_active}
                  onClick={() => {
                    handleDeleteWishlistItem(item._id);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  size="2x"
                  className={styles.itemDetalis_favorite}
                  onClick={() => {
                    handleAddWishlistItem(item._id);
                  }}
                />
              )}
            </div>
            <div className={styles.addToCart}>
              {isInCart ? (
                <DeleteCartBtn cartItem={item} />
              ) : (
                <AddCartBtn cartItem={item} />
              )}

              <p className={styles.currentPrice}>
                Price: {item.currentPrice} $
              </p>
            </div>
          </div>
        </div>
      )}

      <div>
        <p className={styles.comment}>Comments</p>
        <Comments id={item._id} setFlag={setFlag} flag={flag} />
      </div>
    </div>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    itemNo: PropTypes.string,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    description: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number,
  }),
  flag: PropTypes.bool.isRequired,
  setFlag: PropTypes.func.isRequired,
};

ItemDetails.defaultProps = {
  item: PropTypes.shape({
    _id: "",
    itemNo: "",
    name: "",
    currentPrice: 0,
    description: "",
    imageUrls: [""],
    weight: 0,
  }),
};

export default ItemDetails;
