import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_WISHLIST } from "../../../store/actions/wishlistItemsActions";
import { removeFromLS } from "../../../utils/localStorage";

import styles from './SignOutBtn.module.scss'

function SignOutBtn (props){
    const { setUserName } = props;
    const dispatch = useDispatch();
    
    return(
        <span className={styles.btn_out} onClick={()=>{console.log('hello'); dispatch({type: DELETE_WISHLIST, payload: []}); removeFromLS("userName"); removeFromLS("authToken"); setUserName(false)}} >Sign out</span>
    )
}


export default SignOutBtn;