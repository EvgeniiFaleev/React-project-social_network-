import React, {useEffect} from "react";

import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {usersActions, usersSelectors} from "./modules/users/";
import {User} from "./ui/organisms/User/User";
import {Preloader} from "../../ui/atoms/preloader/Preloader";
import {Paginator} from "../../ui/organisms/Paginator/Paginator";
import classes from "./Users.module.scss"


export const Users = () => {


  const {
    users: usersList, pageSize, totalUsersCount, currentPage, isFetching, isFollowing, isAuth
  } = useSelector((state) => (
    {
      users: usersSelectors.getUsers(state),
      pageSize: usersSelectors.getPageSize(state),
      totalUsersCount: usersSelectors.getTotalUsersCount(state),
      currentPage: usersSelectors.getCurrentPage(state),
      isFetching: state.init.isFetching,
      isFollowing: usersSelectors.getIsFollowing(state),
      isAuth: state.auth.user.isAuth
    }
  ), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getUsers(pageSize, currentPage));
  }, [currentPage,pageSize, dispatch]);

  const onPageChanged = (pageNumber) => {
    dispatch(usersActions.getUsers(pageSize, pageNumber));

  };

  const onFollow = (id) => {
    dispatch(usersActions.followUser(id));
  };

  const onUnFollow = (id) => {
    dispatch(usersActions.unFollowUser(id));
  };

const users = usersList.map((user) => {

    return (
      <User key={user.id} isAuth={isAuth}
        photo={user.photos.small}
        status={user.status}
        status={user.status}
        id={user.id}
        followed={user.followed}
        onFollow={onFollow}
        onUnFollow={onUnFollow}
        fullName={user.name}
        isFollowing={isFollowing}
      />
    );
  });

  return (
    <>
      {isFetching ?
        <Preloader/> :
        (
          <div className={classes.users}>
            {users}
            {/*<Paginator totalUsersCount={totalUsersCount}*/}
            {/*  pageSize={pageSize} currentPage={currentPage}*/}
            {/*  onPageChanged={onPageChanged}/>*/}
          </div>
        )}
    </>
  );
};

