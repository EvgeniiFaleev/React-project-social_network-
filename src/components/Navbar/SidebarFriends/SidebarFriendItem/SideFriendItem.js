import React from "react";
import classes from "./FriendItem.module.scss";

export default function SideFriend(props) {
  return (
    <div className={classes.friend_item}>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt=""
      />
      <p className={classes.friend_item_name}>{props.name}</p>
    </div>
  );
}
