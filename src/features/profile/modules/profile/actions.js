import {profileAPI, usersAPI} from "../../../../api/api";
import {initActions} from "../../../autnentification/modules/initialization";
import * as types from "./types";
import {usersActions} from "../../../users/modules/users";

// ===============Action Creators====================
export const addPostActionCreator = (newMessageBody) => (
  {
    type: types.ADD_POST,
    newMessageBody
  }
);

export const setUserProfile = (profile) => (
  {
    type: types.SET_USER_PROFILE,
    profile: profile
  }
);
export const setStatus = (status) => (
  {
    type: types.SET_STATUS,
    status
  }
);

export const updatePhoto = (photo) => (
  {
    type: types.UPDATE_PHOTO,
    photo
  }
);

export const toggleIsFollowing = (isFollowing) => (
  {
    type: types.TOGGLE_IS_FOLLOWING,
    isFollowing
  }
);
export const isFollowed = (isFollowed) => (
  {
    type: types.IS_FOLLOWED,
    isFollowed
  }
);

// ====================Thunk Creatots===========================

export const followUser = () => (dispatch, getState) => {
  dispatch(toggleIsFollowing(true));
  usersAPI.followUser(getState().profile.profile.userId)
    .then(() => {
      dispatch(isFollowed(true));
      dispatch(toggleIsFollowing(false));
      dispatch(usersActions.getFriendsDemo(6, 1));
    });
};

export const unFollowUser = () => (dispatch, getState) => {
  dispatch(toggleIsFollowing(true));
  usersAPI.unFollowUser(getState().profile.profile.userId)
    .then(() => {
      dispatch(isFollowed(false));
      dispatch(toggleIsFollowing(false));
      dispatch(usersActions.getFriendsDemo(6, 1));
    });
};

export const isUserFollowed = (userId) => (dispatch) => {
  usersAPI.isFollowed(userId)
    .then((response) => dispatch(isFollowed(response)))
};

export const getUser = (userId) => (dispatch) => {
  dispatch(initActions.toggleIsFetching(true));
  return profileAPI.getUser(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
      dispatch(initActions.toggleIsFetching(false));
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
    .then(() => {
      dispatch(setStatus(status))
    });
};

export const savePhoto = (photoFile) => async (dispatch) => {
  let response = await profileAPI.setPhoto(photoFile);
  dispatch(updatePhoto(response.data.data.photos))
};
export const saveProfile = (profile) => async (dispatch, getState) => {

  const response = await profileAPI.setProfile(profile);
  if (response.data.resultCode === 0) {
    await dispatch(getUser(getState().auth.user.id));
  } else {
    return response.data.messages;
  }

};