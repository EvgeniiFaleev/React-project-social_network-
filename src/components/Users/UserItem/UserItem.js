import React from "react";
import {NavLink} from "react-router-dom";


let User = (props) => {
  return (
    <div className="user" key={props.id}>
      <NavLink to={`/profile/${props.id}`}>
        <img src={props.photo} alt=""/>
      </NavLink>
      {props.followed ? (

        <button
          disabled={props.isFollowing.some((id) => id === props.id)}
          onClick={() => {
            props.onUnFollow(props.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.isFollowing.some((id) => id === props.id)}
          onClick={() => {
            props.onFollow(props.id);
          }}
        >
          Follow
        </button>
      )}!

      <p>{props.fullName}</p>
      <p>{props.location}</p>
    </div>
  );

};

export default User;
