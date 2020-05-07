import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

export const initialState = {
  enterPosts: [{
    message: "Привет, как дела?",
    likeCount: "2 лайка"
  }, {
    message: "Не умри от коронавируса",
    likeCount: "5 лайков"
  }],
  profile: null,
  status: "Статус Редакса"
};
export default function profilePageReducer(state = initialState,
  action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        enterPosts: [...state.enterPosts, {
          message: action.newMessageBody,
          likeCount: "0"
        }],
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}
// ===============Action Creators====================
export const addPostActionCreator = (newMessageBody) => (
  {
    type: ADD_POST,
    newMessageBody
  }
);

export const setUsersProfile = (profile) => (
  {
    type: SET_USERS_PROFILE,
    profile: profile
  }
);
export const setStatus = (status) => (
  {
    type: SET_STATUS,
    status
  }
);
// ====================Thunk Creatots===========================
export const getUser = (userId) => (dispatch) => {
   return usersAPI.getUser(userId)
    .then((data) => {
      dispatch(setUsersProfile(data));
    });
};

export const getStatus = (id) => (dispatch) => {
 return profileAPI.getStatus(id)
    .then((status) => {
      dispatch(setStatus(status));
    });
};

export const updateStatus = (status) => (dispatch) => {
  return profileAPI.updateStatus(status)
    .then((response) => {
      dispatch(setStatus(status))});
};