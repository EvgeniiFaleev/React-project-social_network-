import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.scss";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsForm} from "./DialogsForm/DialogsForm";
import {useSelector} from "react-redux";
import {useAuthRedirect} from "../../utils/useAuthRedirect";


export const Dialogs = () => {

  useAuthRedirect();

const messagesPage = useSelector((state) => state.MessagesPage);


  const dialogs = messagesPage.enterDialogs.map(function (dialog) {
    return <DialogItem name={dialog.name} id={dialog.id}/>;
  });
  const messages = messagesPage.enterMessages.map((m) => {
    return <MessageItem message={m.message} id={m.id}/>;
  });


  // ==================================================================
  return (
    <div className={classes.dialogs_wrapper}>
      <div className={classes.dialogs}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
      <div>
        <DialogsForm/>
      </div>
    </div>
  );
};
