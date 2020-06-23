import React from "react";
import preloader from "./../../assets/images/preloader/preloader-opacity.svg";
import classes from "./Preloader.module.scss"

export const Preloader = () => {
  return <img className={classes.preloader} src={preloader} alt="" />;
};

