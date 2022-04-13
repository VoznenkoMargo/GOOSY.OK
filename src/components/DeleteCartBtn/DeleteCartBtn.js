/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { AiTwotoneDelete } from "react-icons/ai";
import styles from "./DeleteCartBtn.module.scss";
import { deleteProductFromCartCreator } from "../../store/actionCreators/cartItemsCreator";

function DeleteCartBtn(props) {
  const dispatch = useDispatch();
  const { cartItem } = props;
  const handleClick = () => {
    dispatch(deleteProductFromCartCreator(cartItem._id));
  };

  return (
    <button
      type="button"
      className={styles.backgroundBtn}
      aria-hidden
      onClick={handleClick}
    >
      <p>Delete</p>
      <AiTwotoneDelete size={25} color="#fff" />
    </button>
  );
}

DeleteCartBtn.propTypes = {
  cartItem: PropTypes.shape({
    _id: PropTypes.string,
    itemNo: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.string,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    weight: PropTypes.number,
    count: PropTypes.number,
  }),
};

DeleteCartBtn.defaultProps = {
  cartItem: {
    _id: "",
    itemNo: "",
    imageUrls: [""],
    categories: "",
    name: "",
    currentPrice: 0,
    weight: 0,
    count: 0,
  },
};

export default React.memo(DeleteCartBtn);
