import React from "react";
import classes from "./MessageItem.module.scss";


export const Message = ({message}) => {
  return <div className={classes.message}>{message}</div>;
};
