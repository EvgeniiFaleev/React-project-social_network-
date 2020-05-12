import React from "react";
import User from "./UserItem/UserItem";
import Preloader from "../common/preloader/Preloader";
import {Paginator} from "../common/Paginator/Paginator";


let Users = (props) => {
  let users = props.users.map((user) => {
    return (
      <User key={user.id}
            photo={user.photos.small ? user.photos.small :
              "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}
            location={user.location}
            status={user.status}
            id={user.id}
            followed={user.followed}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            fullName={user.name}
            isFollowing={props.isFollowing}
            toggleFollowingUser={props.toggleFollowingUser}
      />
    );
  });
  return (
    <>
      {props.isFetching ? (
        <Preloader/>
      ) : (
        <div className="users">
          {users}
          <Paginator {...props}/>
        </div>
      )}
    </>
  );
};

export default Users;
