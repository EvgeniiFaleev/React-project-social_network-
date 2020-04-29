import {usersAPI} from "../api/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT;";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING;";
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

const usersPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case "FAKE": return{...state, fake:state.fake+1};
    case FOLLOW:
      return {
        ...state, users: state.users.map((user, index, arr) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          } else {
            return user;
          }
        })
      };
    case UNFOLLOW:
      return {
        ...state, users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          } else {
            return user;
          }
        })
      };
    case SET_USERS:
      return {
        ...state, users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: +action.pageNumber
      };
    case SET_TOTAL_COUNT:
      return {
        ...state, totalUsersCount: action.totalCount
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      };
    case TOGGLE_IS_FOLLOWING:
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

// Action Creators===============================================
export default usersPageReducer;

export const follow = (userId) => (
  {
    type: FOLLOW, userId
  }
);

export const unFollow = (userId) => (
  {
    type: UNFOLLOW, userId
  }
);

export const setUsers = (users) => (
  {
    type: SET_USERS, users
  }
);

export const setCurrentPage = (pageNumber) => (
  {
    type: SET_CURRENT_PAGE, pageNumber
  }
);

export const setTotalCount = (totalCount) => (
  {
    type: SET_TOTAL_COUNT, totalCount
  }
);
export const toggleIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching
  }
);
export const toggleFollowingUser = (id, isFetchingButton) => (
  {
    type: TOGGLE_IS_FOLLOWING, id, isFetchingButton
  }
);
// ============================Thunk Creators====================

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageSize, currentPage)
      .then((data) => {
        if (currentPage !== 1) dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
      });
  };
};

export const followUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingUser(id, true));
    usersAPI.followUser(id)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollowingUser(id, false));
          dispatch(follow(id));
        }
      });
  };
};
export const unFollowUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingUser(id, true));
    usersAPI.unFollowUser(id)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollowingUser(id, false));
          dispatch(unFollow(id));
        }
      });
  };
};