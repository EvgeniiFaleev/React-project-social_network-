import React from "react";
let User = (props) => {
  return (
    <div className="user" key={props.id}>
      <img src="" alt="" />
      {props.followed ? (
        <button
          onClick={() => {
            props.unFollow(props.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            props.follow(props.id);
          }}
        >
          Follow
        </button>
      )}
      <p>{props.fullName}</p>
      <p>{props.location}</p>
    </div>
  );
};

export default User;
