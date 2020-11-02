import {createSelector} from "reselect";
import {RootState} from "../../../../lib/store/root-reducer";
import {UsersItemType} from "@socialAPI";


export const getUsers = (state: RootState): Array<UsersItemType> => state.users.users;

export const getUsersWithPhotoSelector = createSelector(
    getUsers,
    (users) => {
      return users.filter(u => {
        return !!u.photos.small;
      });
    });

export const getPageSize = (state: RootState): number => state.users.pageSize;

export const getTotalUsersCount = (state: RootState): number => state.users.totalUsersCount;

export const getCurrentPage = (state: RootState): number => state.users.currentPage;

export const getIsFetching = (state: RootState): boolean => state.users.isFetching;

export const getIsFollowing = (state: RootState): Array<number> => state.users.isFollowing;

