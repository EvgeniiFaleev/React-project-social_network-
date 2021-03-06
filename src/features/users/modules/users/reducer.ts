import {updateArrayOfItemsWithId} from "@utils/obj-helpers";
import * as types from "./types"
import {UsersItemType} from "@socialAPI";
import {UsersActions} from "@users/modules/users/actions";

type UsersStateType = {
  friends: Array<UsersItemType>,
  users: Array<UsersItemType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  isFollowing: Array<number>
}
const initialState: UsersStateType = {
  friends: [],
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: []
};

export const reducer = (state = initialState, action: UsersActions): UsersStateType => {

  switch (action.type) {
    case types.FOLLOW:
      return {
        ...state,
        users: updateArrayOfItemsWithId(state.users,
            action.userId,
            {followed: true})
      };
    case types.UN_FOLLOW:
      return {
        ...state,
        users: updateArrayOfItemsWithId(state.users,
            action.userId,
            {followed: false})
      };
    case types.SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case types.SET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends]
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: +action.pageNumber
      };
    case types.SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      };
    case types.TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetchingButton ?
            [...state.isFollowing, action.id] :
            state.isFollowing.filter((id) => action.id !== id),
      };

    default:
      return state;
  }
};