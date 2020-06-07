import React from "react";
import classes from "./ProfileInfo.module.scss";
import {useDispatch} from "react-redux";
import {ProfileEdit} from "../../molecules/ProfileEdit/ProfileEdit";
import {ProfileStatus} from "../../atoms/ProfileStatus/ProfileStatus";
import {profileActions} from "../../../modules/profile";


export const ProfileInfo = ({userId, profile, authUserId, ...props}) => {
  const dispatch = useDispatch();

  const isOwner = userId === authUserId;

  const onSaveFile = (e) => {
    if (e.target.files.length) dispatch(profileActions.savePhoto(e.target.files[0]));
  };

  return (
    <div className={classes.profileInfo}>
      <img alt="common_img" className={classes.head_image} src={props.head_img}/>
      <div className={classes.bio}>
        <img alt="avatar" className={classes.myAva} src={props.myAva_img}/>
        <div
          className={classes.description}>{profile.fullName}</div>
      </div>
      {isOwner && <input onChange={onSaveFile}
        type="file"/>}
      <ProfileStatus dispatch={dispatch} isOwner={isOwner}
        userId={userId}/>
      <ProfileEdit profile={profile} isOwner={isOwner}/>
    </div>
  );
};
