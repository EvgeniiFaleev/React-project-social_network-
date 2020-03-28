import React from "react";
import User from "./UserItem/UserItem";
import * as axios from "axios";

let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => props.setUsers(response.data.items));
  }
  let users = props.users.map((user) => {
    return (
      <User
        location={user.location}
        status={user.status}
        id={user.id}
        followed={user.followed}
        follow={props.follow}
        unFollow={props.unFollow}
        fullName={user.name}
      />
    );
  });
  return <div className="users">{users}</div>;
};
export default Users;
