import React from "react";
import preloader from "./../../assets/images/preloader/preloader-opacity.svg";
import classes from "./Preloader.module.scss"

export const Preloader = () => {
  return (

  <div className={classes.cssload_loader}>
    <div className={`${classes.cssload_inner} ${classes.cssload_one} `}></div>
    <div className={`${classes.cssload_inner} ${classes.cssload_two} `}></div>
    <div className={`${classes.cssload_inner} ${classes.cssload_three} ` }></div>
  </div>
    )

};

