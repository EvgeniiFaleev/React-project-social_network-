import React from "react";
import classes from "./ProfileInfo.module.scss";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDescription} from "./ProfileDescription";
import {useDispatch, useSelector} from "react-redux";
import {savePhoto} from "../../../redux/profile-reducer";


export const ProfileInfo = ({selectedId, profile, ...props}) => {

  const authUserId = useSelector((state) => (
    state.authUser.user.id
  ));

  const dispatch = useDispatch();

  const isOwner = selectedId === authUserId;

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
      <ProfileStatusWithHooks dispatch={dispatch}
        id={selectedId}/>
      <ProfileDescription profile={profile} isOwner={isOwner}/>
    </div>
  );
};
