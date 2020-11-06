import React from "react";
import classes from "./Message.module.scss";
import {DialogType} from "@socialAPI";

interface IMessageProps {
  message: DialogType,
  isOwner: boolean,
}

export const Message =
    React.forwardRef<HTMLDivElement, IMessageProps>(({message, isOwner}, ref) => {
      return <div ref={ref} key={message.id}
          className={`${classes.message} ${isOwner ? classes.owner : classes.other}`}>
        <p className={classes.message_text}>{message.body}</p>
        <p className={classes.message_meta}>{message.addedAt}</p>
      </div>;
    });
