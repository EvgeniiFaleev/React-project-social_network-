import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

export default function Dialogs(props) {
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>
        <DialogItem name="Jack" />
        <DialogItem name="Lila" />
        <DialogItem name="Kirill" />
      </div>
      <div className={classes.messages}>
        <MessageItem message="Hello!" />
        <MessageItem message="Hello Man!" />
        <MessageItem message="We gonna Die!" />
      </div>
    </div>
  );
}
