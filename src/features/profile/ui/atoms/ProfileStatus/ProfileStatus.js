import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {profileActions} from "../../../../profile/modules/profile";
import classes from "./ProfileStatus.module.scss";

export const ProfileStatus = ({dispatch, isOwner}) => {

  const userStatus = useSelector((state) => (
    state.profile.status
  ));

  let [status, setStatus] = useState(null);
  let [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(userStatus)
  }, [userStatus]);

  const onStatusChange = (e) => {
    dispatch(profileActions.updateStatus(e.target.value));
    setEditMode(false);
  };
  return (
    <div className={classes.profileStatus}>
      {isOwner && editMode ?
        <textarea
          className={classes.profileStatus_textarea} autoFocus={true}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={onStatusChange}
          value={status}/> :
        <p style={isOwner ? {cursor: "pointer"} : {cursor: ""}} onClick={() => setEditMode(true)}>{userStatus || "no-" +
        " status"}</p>}
    </div>
  )
};
