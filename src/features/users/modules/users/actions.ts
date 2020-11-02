import * as types from "./types"
import {usersAPI, UsersItemType} from "@api/socialAPI";
import {initActions} from "@auth/modules/initialization";
import {usersActions} from "./index";
import {Action} from "redux";
import {AppThunkType, TDispatch} from "@store";
import {RootState} from "../../../../lib/store/root-reducer";

// Action Creators===============================================

interface IFollowAction extends Action<typeof types.FOLLOW> {
  userId: number
}

export const follow = (userId: number): IFollowAction => (
    {
      type: types.FOLLOW,
      userId
    }
);

interface IUnFollowAction extends Action<typeof types.UN_FOLLOW> {
  userId: number
}

export const unFollow = (userId: number): IUnFollowAction => (
    {
      type: types.UN_FOLLOW,
      userId
    }
);

interface ISetUsersAction extends Action<typeof types.SET_USERS> {
  users: Array<UsersItemType>
}

export const setUsers = (users: Array<UsersItemType>): ISetUsersAction => (
    {
      type: types.SET_USERS,
      users
    }
);

interface ISetFriendsAction extends Action<typeof types.SET_FRIENDS> {
  friends: Array<UsersItemType>
}

export const setFriends = (friends: Array<UsersItemType>): ISetFriendsAction => (
    {
      type: types.SET_FRIENDS,
      friends
    }
);

interface ISetCurrentPageAction extends Action<typeof types.SET_CURRENT_PAGE> {
  pageNumber: number
}

export const setCurrentPage = (pageNumber: number): ISetCurrentPageAction => (
    {
      type: types.SET_CURRENT_PAGE,
      pageNumber
    }
);

interface ISetTotalCountAction extends Action<typeof types.SET_TOTAL_COUNT> {
  totalCount: number
}

export const setTotalCount = (totalCount: number): ISetTotalCountAction => (
    {
      type: types.SET_TOTAL_COUNT,
      totalCount
    }
);

interface IToggleFollowingUserAction extends Action<typeof types.TOGGLE_IS_FOLLOWING> {
  id: number,
  isFetchingButton: boolean
}

export const toggleFollowingUser = (id: number, isFetchingButton: boolean): IToggleFollowingUserAction => (
    {
      type: types.TOGGLE_IS_FOLLOWING,
      id,
      isFetchingButton
    }
);

export type UsersActions =
    IToggleFollowingUserAction
    | ISetTotalCountAction
    | ISetCurrentPageAction
    | ISetFriendsAction
    | ISetUsersAction
    | IUnFollowAction
    | IFollowAction
// ============================Thunk Creators====================

export const getUsers = (pageSize: number,
                         currentPage: number,
                         isFriend: boolean = false,
                         term: string): AppThunkType<Promise<void>> => {
  return (dispatch) => {
    dispatch(initActions.toggleIsFetching(true));
    return usersAPI.getUsers(pageSize, currentPage, isFriend, term)
        .then((data) => {
          if (currentPage !== 1) dispatch(setCurrentPage(currentPage));
          dispatch(initActions.toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalCount(data.totalCount!));
        });
  };
};
export const search = (term: string): AppThunkType<Promise<void>> => async (dispatch: TDispatch, getState: () => RootState) => {
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

export const getFriendsDemo = (pageSize: number,
                               currentPage: number,
                               isFriend: boolean = true): AppThunkType => (dispatch: TDispatch) => {
  usersAPI.getUsers(pageSize, currentPage, isFriend)
      .then((data) => {
        dispatch(setFriends(data.items));
      });
};


export const followUnfollowFlow = (dispatch: TDispatch,
                                   id: number,
                                   apiMethod: typeof usersAPI.followUser | typeof usersAPI.unFollowUser,
                                   actionCreator: typeof follow | typeof unFollow) => {
  dispatch(toggleFollowingUser(id, true));
  return apiMethod(id)
      .then((data) => {
        if (data && data.resultCode === 0) {
          dispatch(usersActions.getFriendsDemo(6, 1));
          dispatch(toggleFollowingUser(id, false));
          dispatch(actionCreator(id));
        }
      });
};

export const followUser = (id: number): AppThunkType<Promise<void>> =>
    (dispatch: TDispatch) => {
      return followUnfollowFlow(dispatch,
          id,
          usersAPI.followUser.bind(usersAPI),
          follow);
    };


export const unFollowUser = (id: number): AppThunkType<Promise<void>> => {
  return (dispatch: TDispatch) => {
    return followUnfollowFlow(dispatch,
        id,
        usersAPI.unFollowUser.bind(usersAPI),
        unFollow);
  }
};
