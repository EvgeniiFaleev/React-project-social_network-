import React from "react";
import classes from "./DialogDescription.module.scss";
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
          <small>You have a {newMessagesCount} new  message(s)</small> :
          <small>You have no new messages</small>}
        <br/>
          <small className={classes.metaInfo}>
            Last seen:  {lastUserActivityDate}
          </small>

      </div>
    </section>
  </Link>
  )
};

