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
      <div className={classes.bio}>
        <label>
          <img alt="avatar"
            className={`${classes.userPhoto} ${isOwner &&
            classes.ownerPhoto}`} src={props.myAva_img}/>
          {isOwner &&
          <input name="cnangePhoto" hidden onChange={onSaveFile}
            type="file"/>}
        </label>
      </div>

      <div
        className={classes.description}>{profile.fullName}</div>
      <ProfileStatus dispatch={dispatch} isOwner={isOwner}
        userId={userId}/>
      <ProfileEdit profile={profile} isOwner={isOwner}/>
    </div>
  );
};
