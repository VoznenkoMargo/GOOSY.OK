/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from "react";
import { CircularProgress } from "@mui/material"; // https://mui.com/api/circular-progress/
import "./Preloader.scss";

const Preloader = (props) => {
  const { color, size } = props;
  return <CircularProgress className="preloader" color={color} size={size} />;
};

export default Preloader;
