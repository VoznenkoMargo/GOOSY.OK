import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import styles from "./ArrowBack.module.scss";

function ArrowBack() {
  const history = useHistory();
  return (
    <div
      className={styles.arrowBack}
      onClick={history.goBack}
      aria-hidden="true"
    >
      <p className={styles.arrow}>
        <HiChevronLeft fill="#fff" size={28} />
      </p>
      <span>Back</span>
    </div>
  );
}

export default ArrowBack;
