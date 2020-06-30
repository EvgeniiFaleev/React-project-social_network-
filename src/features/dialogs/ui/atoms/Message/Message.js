import React from "react";
import classes from "./MessageItem.module.scss";


export const Message = React.forwardRef(({message, isOwner} ,ref) => {
  return <div ref={ref} key={message.id}
    className={`${classes.message} ${isOwner ? classes.owner: classes.other}`}>
    <p className={classes.message_text}>{message.body}</p>
    <p className={classes.message_meta}>{message.addedAt}</p>
  </div>;
});
