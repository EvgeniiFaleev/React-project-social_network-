import React from "react";
import classes from "./Dialog.module.scss";
import {Link} from "react-router-dom";
import no_img from "../../../../../ui/assets/images/avatar-undefined.jpg"


export const DialogDescription = ({
  hasNewMessages, id, lastDialogActivityDate, lastUserActivityDate,
  newMessagesCount, photos: {small: avatar}, userName
}) => {

  return (
    <Link to={`dialogs/${id}`}>
    <section className={classes.dialog}>
      <div className={classes.userImage}>
        <img alt="avatar"
          src={avatar ||
          no_img}/>
      </div>
      <div className={classes.messageInfo}>
        <p  className={classes.userName}>{userName}</p>
        {hasNewMessages ?
          <span>You have a {newMessagesCount} new  message(s)</span> :
          <span>You have no new messages</span>}

          <p className={classes.metaInfo}>
            Last message was:  {lastDialogActivityDate} <br/>
            Last seen at:  {lastUserActivityDate}
          </p>

      </div>
    </section>
  </Link>
  )
};

