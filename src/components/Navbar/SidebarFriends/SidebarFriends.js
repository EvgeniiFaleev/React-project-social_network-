import React from "react";
import SideFriend from "./SidebarFriendItem/SideFriendItem";
import classes from "./SidebarFriends.module.scss";
import { NavLink } from "react-router-dom";

export default function SidebarFriends(props) {
  let allFriends = props.friends.map((friend) => {
    return (
      <SideFriend name={friend.name} id={friend.id} online={friend.online} />
    );
  });
  return (
    <div className={classes.friends}>
      <p>
        <NavLink to="/friends" activeClassName={classes.activeLink}>
          Friends
        </NavLink>
      </p>
      <div className={classes.allFriends}>{allFriends}</div>
    </div>
  );
}
