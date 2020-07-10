import React, {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {usersActions, usersSelectors} from "./modules/users/";
import {User} from "./ui/organisms/User/User";
import {Preloader} from "../../ui/atoms/preloader/Preloader";
import classes from "./Users.module.scss"
import {Paginator} from "../../ui";
import {useLocation, useParams} from "react-router";


function isEmpty(obj) {
  for (let key in obj) {

    return false;
  }
  return true;
}

export const Users = () => {
  const path = useLocation().pathname;
  const isFriends = path === "/friends";
  const searchTerm = useParams().term;
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
      isAuth: state.auth.isAuth
    }
  ), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (path.startsWith("/search/")) {
      dispatch(usersActions.search(searchTerm));
    } else {
      dispatch(usersActions.getUsers(pageSize,
        currentPage,
        isFriends));
    }
  }, [currentPage, pageSize, dispatch, path, isFriends, searchTerm]);

  const onPageChanged = (pageNumber) => {
    dispatch(usersActions.setCurrentPage(pageNumber))
  };


  const users = usersList.map((user) => {

    return (
      <User key={user.id} isAuth={isAuth}
        photo={user.photos.small}
        status={user.status}
        status={user.status}
        id={user.id}
        followed={user.followed}
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
          <>
            <div className={classes.users}>
              {isEmpty(users) ? <p className={classes.users_notFound}>Sorry, nothing found</p> : users }

            </div>
            <Paginator totalUsersCount={totalUsersCount}
              pageSize={pageSize} currentPage={currentPage}
              onPageChanged={onPageChanged}/>
          </>
        )}
    </>
  );
};

