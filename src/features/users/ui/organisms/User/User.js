import React from "react";
import {NavLink} from "react-router-dom";
import {FollowBtn} from "../../atoms/FollowBtn/FollowBtn";


export const User = ({
  isAuth, id, photo, fullName, location, followed, isFollowing, onUnFollow, onFollow
}) => {
  return (
    <div className="user" key={id}>
      <NavLink to={`/profile/${id}`}>
        <img  src={photo ||
        "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}
          alt="avatar"/>
      </NavLink>
      {isAuth ?
        <FollowBtn followed={followed} isFollowing={isFollowing}
          id={id}
          onFollow={onFollow} onUnFollow={onUnFollow}/> :
        ""}

      <p>{fullName}</p>
      <p>{location}</p>
    </div>
  );

};


