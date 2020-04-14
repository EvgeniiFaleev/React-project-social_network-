import React from "react";
import preloader from "../../../assets/images/preloader-opacity.svg";
import classes from "./Preloader.module.scss"

let Preloader = () => {
  return <img className={classes.preloader} src={preloader} alt="" />;
};
export default Preloader;
