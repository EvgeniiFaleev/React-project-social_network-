import {CommonTemplate} from "../../ui/templates/Common";
import React from "react";
import {Profile} from "../../features/profile";


export const ProfilePage = ({selectedId}) => {
  return(
    <CommonTemplate>
      <Profile selectedId={selectedId}/>
    </CommonTemplate>
  )
};