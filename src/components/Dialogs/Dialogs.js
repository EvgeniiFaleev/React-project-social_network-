import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.scss";
import MessageItem from "./MessageItem/MessageItem";

export default function Dialogs(props) {
  // Convert posts to array with JSX elements\
  let dialogs = props.MessagesPage.enterDialogs.map(function(dialog) {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });
  let messages = props.MessagesPage.enterMessages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />;
  });

  // ==================================================================
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div>
        <textarea
          onChange={props.newMessageChange}
          name=""
          value={props.MessagesPage.current}
          placeholder="enter new Message"
        ></textarea>
        <button onClick={props.sendMessage}>send</button>
      </div>
    </div>
  );
}
