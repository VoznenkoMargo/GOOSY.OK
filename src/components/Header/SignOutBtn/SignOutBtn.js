import React from "react";
import { removeFromLS } from "../../../utils/localStorage";

import styles from './SignOutBtn.module.scss'

function SignOutBtn (props){
    const { setUserName } = props;
    
    return(
        <span className={styles.btn_out} onClick={()=>{console.log('hello'); removeFromLS("userName"); setUserName(false)}} >Sign out</span>
    )
}


export default SignOutBtn;