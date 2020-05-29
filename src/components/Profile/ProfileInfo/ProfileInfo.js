import React from "react";
import classes from "./ProfileInfo.module.scss";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileDescription} from "./ProfileDescription";
import {useDispatch} from "react-redux";
import {savePhoto} from "../../../redux/profile-reducer";


export const ProfileInfo = ({userId, profile, authUserId, ...props}) => {
  const dispatch = useDispatch();

  const isOwner = userId === authUserId;

  const onSaveFile = (e) => {
    if (e.target.files.length) dispatch(savePhoto(e.target.files[0]));
  };

  return (
    <div className={classes.profileInfo}>
      <img className={classes.head_image} src={props.head_img}/>
      <div className={classes.bio}>
        <img className={classes.myAva} src={props.myAva_img}/>
        <div
          className={classes.description}>{profile.fullName}</div>
      </div>
      {isOwner && <input onChange={onSaveFile}
        type="file"/>}
      <ProfileStatus dispatch={dispatch} isOwner={isOwner}
        userId={userId}/>
      <ProfileDescription profile={profile} isOwner={isOwner}/>
    </div>
  );
};
