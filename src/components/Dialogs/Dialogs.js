import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.scss";
import MessageItem from "./MessageItem/MessageItem";
import DialogsForm from "./DialogsForm/DialogsForm";


export default function Dialogs(props) {
  // Convert posts to array with JSX elements\
  let dialogs = props.MessagesPage.enterDialogs.map(function (dialog) {
    return <DialogItem name={dialog.name} id={dialog.id}/>;
  });
  let messages = props.MessagesPage.enterMessages.map((m) => {
    return <MessageItem message={m.message} id={m.id}/>;
  });

let onSendMessage = (formData) =>{
  props.sendMessage(formData.newMessageBody);
};
  // ==================================================================
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div>
        <DialogsForm onSubmit={onSendMessage}/>
      </div>
    </div>
  );
}
