import React, {useState} from "react";
import {ProfileForm} from "../ProfileForm/ProfileForm";
import {Contacts} from "../Contacts/Contacts";


export const ProfileEdit = ({profile, isOwner}) => {

  const [editMode, setEditMode] = useState(false);

  const onOpenEditMode = (e) => {
    e.preventDefault();
    setEditMode(true);
  };
  return (
    <>
      {isOwner && editMode ?
        <ProfileForm profile={profile}
          closeEditMode={() => setEditMode(false)}/> :
        <div>
          {isOwner ?
            <button onClick={onOpenEditMode}>Edit Profile</button> :
            ""}
          <p>Looking for a Job: {profile.lookingForAJob ?
            "Yes" :
            "Empty Field"}</p>
          <p>Looking for a job
            description: {profile.lookingForAJobDescription ||
            "Empty Field"} </p>
          <Contacts contacts={profile.contacts}/>
        </div>}
    </>
  )
};