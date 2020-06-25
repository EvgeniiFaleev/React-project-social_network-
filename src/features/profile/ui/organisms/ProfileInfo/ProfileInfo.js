import React from "react";
import classes from "./ProfileInfo.module.scss";
import {useDispatch} from "react-redux";
import {ProfileDescription} from "../../molecules/ProfileDescription/ProfileDescription";
import {ProfileStatus} from "../../atoms/ProfileStatus/ProfileStatus";
import {profileActions} from "../../../modules/profile";


export const ProfileInfo = ({userId, profile, authUserId, ...props}) => {
  const dispatch = useDispatch();

  const isOwner = userId === authUserId;

  const onSaveFile = (e) => {
    if (e.target.files.length) dispatch(profileActions.savePhoto(e.target.files[0]));
  };

  return (
    <div className={classes.profileInfo_wrapper}>

      <div className={classes.userPhoto_block}>
        <label>
          <img alt="avatar"
            className={`${classes.userPhoto} ${isOwner &&
            classes.ownerPhoto}`} src={props.myAva_img}/>
          {isOwner &&
          <input hidden onChange={onSaveFile} type="file"/>}
        </label>
      </div>

      <section className={classes.profileInfo}>
        <div className={classes.userName_container}>
          <p className={classes.userName}>{profile.fullName}</p>
          <ProfileStatus dispatch={dispatch} isOwner={isOwner}
            userId={userId}/>
        </div>
        <ProfileDescription profile={profile} isOwner={isOwner}/>
      </section>


    </div>
  );
};
