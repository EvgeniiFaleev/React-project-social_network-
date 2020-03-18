import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.scss";
import MessageItem from "./MessageItem/MessageItem";

export default function Dialogs(props) {
  // Convert posts to array with JSX elements\
  debugger;
  let dialogs = props.MessagesPage.enterDialogs.map(function(dialog) {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });
  let messages = props.MessagesPage.enterMessages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />;
  });

  function onSendMessage() {
    props.sendMessage();
  }
  function onNewMessageChange(e) {
    props.newMessageChange(e);
  }
  // ==================================================================
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div>
        <textarea
          onChange={onNewMessageChange}
          name=""
          placeholder="enter new Message"
        ></textarea>
        <button onClick={onSendMessage}>send</button>
      </div>
    </div>
  );
}
