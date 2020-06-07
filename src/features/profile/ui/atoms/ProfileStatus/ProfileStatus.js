import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {profileActions} from "../../../modules/profile";


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
    <div className="">
      {isOwner && editMode ? <textarea autoFocus={true}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={onStatusChange}
          value={status}/> :
        <p onClick={() => setEditMode(true)}>{userStatus || "no-" +
        " status"}</p>}
    </div>
  )
};
