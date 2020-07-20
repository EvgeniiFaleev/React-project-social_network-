import React, {useState} from "react";
import {ProfileForm} from "../ProfileForm/ProfileForm";
import {Contacts} from "../Contacts/Contacts";
import classes from "./ProfileDescription.module.scss"

export const ProfileDescription = ({profile, isOwner}) => {

  const [editMode, setEditMode] = useState(false);

  const onOpenEditMode = (e) => {
    e.preventDefault();
    setEditMode(true);
  };
  return (
    <div className={classes.profileDescription}>
      {isOwner && editMode ?
        <ProfileForm profile={profile}
          closeEditMode={() => setEditMode(false)}/> :
        <div className={classes.about_wrapper}>
          <section className={classes.about}>
            <h3 className={classes.about_header}>About</h3>
            <p className={classes.about_item}>Looking for a Job: {profile.lookingForAJob ?
            "Yes" :
            "No"}</p>
            <p className={classes.about_item}>Looking for a job
            description: {profile.lookingForAJobDescription ||
            "..."} </p>
          </section>
          <Contacts contacts={profile.contacts}/>
           {isOwner ?
            <button className={classes.editProfile_btn} onClick={onOpenEditMode}>Edit Profile</button> :
            ""}
        </div>}
    </div>
  )
};