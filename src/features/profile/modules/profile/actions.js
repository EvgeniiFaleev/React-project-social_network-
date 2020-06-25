import {profileAPI} from "../../../../api/api";
import {initActions} from "../../../autnentification/modules/initialization";
import * as types from "./types";

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
// ====================Thunk Creatots===========================
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