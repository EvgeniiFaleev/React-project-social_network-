import {createSelector} from "reselect";


export const getUsers = (state) => state.users.users;

export const getUsersWithPhotoSelector = createSelector(
  getUsers,
  (users) => {
    return users.filter(u => {
      return !!u.photos.small;
    });
  });

export const getPageSize = (state) => state.users.pageSize;

export const getTotalUsersCount = (state) => state.users.totalUsersCount;

export const getCurrentPage = (state) => state.users.currentPage;

export const getIsFetching = (state) => state.users.isFetching;

export const getIsFollowing = (state) => state.users.isFollowing;

