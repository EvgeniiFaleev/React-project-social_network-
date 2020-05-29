import React, {useEffect} from "react";
import {User} from "./UserItem/User";
import {Preloader} from "../common/preloader/Preloader";
import {Paginator} from "../common/Paginator/Paginator";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowing,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector
} from "../../redux/users-selectors";
import {
  followUser, getUsers, unFollowUser
} from "../../redux/users-reducer";


export const Users = () => {


  const {
    users: usersList, pageSize, totalUsersCount, currentPage, isFetching, isFollowing, isAuth
  } = useSelector((state) => (
    {
      users: getUsersSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isFollowing: getIsFollowing(state),
      isAuth: state.authUser.user.isAuth
    }
  ), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(pageSize, currentPage));
  }, [currentPage]);

  const onPageChanged = (pageNumber) => {
    dispatch(getUsers(pageSize, pageNumber));

  };

  const onFollow = (id) => {
    dispatch(followUser(id));
  };

  const onUnFollow = (id) => {
    dispatch(unFollowUser(id));
  };

  let users = usersList.map((user) => {

    return (
      <User key={user.id} isAuth={isAuth}
        photo={user.photos.small}
        location={user.location}
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
          <div className="users">
            {users}
            <Paginator totalUsersCount={totalUsersCount}
              pageSize={pageSize} currentPage={currentPage}
              onPageChanged={onPageChanged}/>
          </div>
        )}
    </>
  );
};

