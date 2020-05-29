import React from "react";
import classes from "./DialogItem.module.scss";

export const DialogItem = (props) => {
  return <div className={classes.dialog}>{props.name}</div>;
};

