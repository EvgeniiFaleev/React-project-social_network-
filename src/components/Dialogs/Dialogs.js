import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

export default function Dialogs(props) {
  // Convert posts to array with JSX elements
  let dialogs = props.state.enterDialogs.map(function(dialog) {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });
  let messages = props.state.enterMessages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />;
  });

  // ==================================================================
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
    </div>
  );
}
