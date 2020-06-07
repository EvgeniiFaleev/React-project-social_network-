import React from "react";
import classes from "./Dialog.module.scss";
import {Link, Route, Switch} from "react-router-dom";
import {CommonTemplate} from "../../../../../ui";
import {Dialog} from "../../organisms/Dialog";


export const DialogDescription = ({
  hasNewMessages, id, lastDialogActivityDate, lastUserActivityDate,
  newMessagesCount, photos: {small: avatar}, userName, ...props
}) => {

  return (
    <section className={classes.dialog}>
      <div className="userInfo">{userName}<br/>UserId:{id}
        <img alt="avatar"
          src={avatar ||
          "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}/>
      </div>
      <div className="messageInfo">
        {hasNewMessages ?
          `You have a ${newMessagesCount} new  message(s)` :
          "You have no new messages"}
        <Link to={`dialogs/${id}`}>
          <p className="metaInfo">
            Last message was: {lastDialogActivityDate}
            Last seen as: {lastUserActivityDate}
          </p>
        </Link>
      </div>
    </section>
  )
};

