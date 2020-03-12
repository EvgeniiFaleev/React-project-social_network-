import React from "react";
import classes from "./Friends.module.scss";
import Friend from "./FriendItem/FrendItem";

export default function Friends(props) {
  let allFriends = props.friends.map((friend) => {
    return <Friend name={friend.name} id={friend.id} online={friend.online} />;
  });
  return (
    <div className={classes.friends}>
      <p>Friends</p>
      <div className={classes.allFriends}>{allFriends}</div>
    </div>
  );
}
