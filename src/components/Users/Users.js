import React from "react";
import User from "./UserItem/UserItem";
import classes from "./Users.module.scss";
import Preloader from "../common/preloader/Preloader";


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
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let firstPages = [];
  let lastPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (i <= 3) {
      firstPages.push(<span
        onClick={(e) => {
          props.onPageChanged(e);
        }}
        className={props.currentPage === i ? classes.selected : null}
      >
        {i + " "}
      </span>);
    } else if (i >= pagesCount - 3 && i < pagesCount) {
      lastPages.push(<span
        onClick={(e) => {
          props.onPageChanged(e);
        }}
        className={props.currentPage === i ? classes.selected : null}
      >
        {i + " "}
      </span>);
    }
  }
  return (
    <>
      {props.isFetching ? (
        <Preloader/>
      ) : (
        <div className="users">
          {users}
          {firstPages}...{lastPages}
        </div>
      )}
    </>
  );
};

export default Users;
