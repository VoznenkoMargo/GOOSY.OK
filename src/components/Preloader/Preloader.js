import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.loadWrapper}>
      <CircularProgress className="preloader" color="success" />
    </div>
  );
}

export default Preloader;
