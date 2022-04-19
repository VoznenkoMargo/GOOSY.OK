/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { DELETE_WISHLIST } from "../../../store/actions/wishlistItemsActions";
import { DELETE_CART } from "../../../store/actions/cartItemsActions";
import { removeFromLS } from "../../../utils/localStorage";

import styles from "./SignOutBtn.module.scss";

function SignOutBtn(props) {
  const { setUserName } = props;
  const dispatch = useDispatch();


    return (
    <span
      className={styles.btn_out}
      onClick={() => {
        dispatch({ type: DELETE_WISHLIST, payload: [] });
        dispatch({ type: DELETE_CART, payload: [] });
        removeFromLS("userName");
        removeFromLS("authToken");
        removeFromLS("cart")
        setUserName(false);
      }}
    >
      Log out
      <LogoutOutlinedIcon />
    </span>
  );
}

SignOutBtn.propTypes = {
  setUserName: PropTypes.func.isRequired,
}

export default SignOutBtn;