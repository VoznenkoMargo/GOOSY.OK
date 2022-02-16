/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from "react";
import { CircularProgress } from "@mui/material"; // https://mui.com/api/circular-progress/
import styles from "./Preloader.module.scss";

const Preloader = () => {
  // const { color, size } = props;
  return(
    <div className={styles.loadWrapper}>
        <CircularProgress className="preloader" color='success' />
    </div>
  ) 
  
};

export default Preloader;

