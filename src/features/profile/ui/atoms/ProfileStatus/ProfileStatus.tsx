import React, {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {profileActions} from "@profile/modules/profile";
import classes from "./ProfileStatus.module.scss";
import {TDispatch} from "@store/index";
import {RootState} from "@store/root-reducer";

interface IProfileStatusProps {
  dispatch: TDispatch
  isOwner:boolean
}

export const ProfileStatus: FC<IProfileStatusProps> = ({dispatch, isOwner}) => {

  const userStatus = useSelector((state:RootState) => (
    state.profile.status
  ));

  let [status, setStatus] = useState<null | string>(null);
  let [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    setStatus(userStatus)
  }, [userStatus]);

  const onStatusChange = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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
          value={status as string}/> :
        <p style={isOwner ? {cursor: "pointer"} : {cursor: ""}} onClick={() => setEditMode(true)}>{userStatus || "no-" +
        " status"}</p>}
    </div>
  )
};
