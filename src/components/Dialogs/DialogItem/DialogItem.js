import React from "react";
import classes from "./DialogItem.module.scss";

const DialogItem = (props) => {
  return <div className={classes.dialog}>{props.name}</div>;
};
export default DialogItem;
