import React from "react";
import classes from "./MessageItem.module.scss";

export default function MessageItem(props) {
  return <div className={classes.message}>{props.message}</div>;
}
