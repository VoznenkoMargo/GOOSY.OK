/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { DELETE_WISHLIST } from "../../../store/actions/wishlistItemsActions";
import { DELETE_CART } from "../../../store/actions/cartItemsActions";
import { removeFromLS } from "../../../utils/localStorage";

import styles from "./SignOutBtn.module.scss";
// import {deleteCartCreator} from "../../../store/actionCreators/cartItemsCreator";

function SignOutBtn(props) {
  const { setUserName } = props;
  const dispatch = useDispatch();


    return (
    <span
      className={styles.btn_out}
      onClick={() => {
        dispatch({ type: DELETE_WISHLIST, payload: [] });
        dispatch({ type: DELETE_CART, payload: [] });
        // dispatch(deleteCartCreator)
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

export default SignOutBtn;
