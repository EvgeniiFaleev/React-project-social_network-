import * as types from "./types"
import {usersAPI} from "@api/socialAPI";
import {initActions} from "@auth/modules/initialization";
import {usersActions} from "./index";

// Action Creators===============================================

export const follow = (userId) => (
  {
    type: types.FOLLOW,
    userId
  }
);

export const unFollow = (userId) => (
  {
    type: types.UN_FOLLOW,
    userId
  }
);

export const setUsers = (users) => (
  {
    type: types.SET_USERS,
    users
  }
);
export const setFriends = (friends) => (
  {
    type: types.SET_FRIENDS,
    friends
  }
);

export const setCurrentPage = (pageNumber) => (
  {
    type: types.SET_CURRENT_PAGE,
    pageNumber
  }
);

export const setTotalCount = (totalCount) => (
  {
    type: types.SET_TOTAL_COUNT,
    totalCount
  }
);


export const toggleFollowingUser = (id, isFetchingButton) => (
  {
    type: types.TOGGLE_IS_FOLLOWING,
    id,
    isFetchingButton
  }
);
// ============================Thunk Creators====================

export const getUsers = (pageSize,
  currentPage,
  isFriend = false,
  term) => {
  return (dispatch) => {
    dispatch(initActions.toggleIsFetching(true));
    return usersAPI.getUsers(pageSize, currentPage, isFriend, term)
      .then((data) => {
        if (currentPage !== 1) dispatch(setCurrentPage(currentPage));
        dispatch(initActions.toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
      });
  };
};
export const search = (term) => async (dispatch, getState) => {
  dispatch(initActions.toggleIsFetching(true));
  const friendsPortion = await usersAPI.getUsers(getState().users.pageSize,
    getState().users.currentPage / 2,
    true,
    term);
  const usersPortion = await usersAPI.getUsers(getState().users.pageSize,
    getState().users.currentPage / 2,
    false,
    term);
  const allUsers = [...friendsPortion.items, ...usersPortion.items];
  dispatch(setUsers(allUsers));
  dispatch(setTotalCount(allUsers.length));
  dispatch(initActions.toggleIsFetching(false));
};

export const getFriendsDemo = (pageSize,
  currentPage,
  isFriend = true) => (dispatch) => {
     usersAPI.getUsers(pageSize, currentPage, isFriend)
      .then((data) => {
        dispatch(setFriends(data.items));
      });
  };
;

export const folowUnfollowFlow = (dispatch,
  id,
  apiMethod,
  actionCreator) => {
  dispatch(toggleFollowingUser(id, true));
  return apiMethod(id)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(usersActions.getFriendsDemo(6, 1));
        dispatch(toggleFollowingUser(id, false));
        dispatch(actionCreator(id));
      }
    });
};

export const followUser = (id) => {
  return (dispatch) => {
    return folowUnfollowFlow(dispatch,
      id,
      usersAPI.followUser.bind(usersAPI),
      follow);
  }

};

export const unFollowUser = (id) => {
  return (dispatch) => {
    return folowUnfollowFlow(dispatch,
      id,
      usersAPI.unFollowUser.bind(usersAPI),
      unFollow);
  }
};
