import React from "react";
import classes from "./MessageItem.module.scss";


export const MessageItem = ({message}) => {
  return <div className={classes.message}>{message}</div>;
};
