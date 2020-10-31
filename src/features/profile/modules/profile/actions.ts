import {
  PhotosType,
  profileAPI,
  ProfileType,
  usersAPI
} from "@api/socialAPI";
import * as types from "./types";
import {usersActions} from "@users/modules/users";
import {batch} from "react-redux";
import {Action} from "redux";
import {AppThunkType, TDispatch} from "@store";
import {RootState} from "../../../../lib/store/root-reducer";

// ===============Action Creators====================

interface SetUserProfileActionType extends Action<typeof types.SET_USER_PROFILE> {
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => (
    {
      type: types.SET_USER_PROFILE,
      profile
    }
);

interface SetStatusActionType extends Action<typeof types.SET_STATUS> {
  status: string
}

export const setStatus = (status: string): SetStatusActionType => (
    {
      type: types.SET_STATUS,
      status
    }
);

interface UpdatePhotoActionType extends Action<typeof types.UPDATE_PHOTO> {
  photo: PhotosType
}

export const updatePhoto = (photo: PhotosType): UpdatePhotoActionType => (
    {
      type: types.UPDATE_PHOTO,
      photo
    }
);

interface ToggleIsFollowingActionType extends Action<typeof types.TOGGLE_IS_FOLLOWING> {
  isFollowing: boolean
}

export const toggleIsFollowing = (isFollowing: boolean): ToggleIsFollowingActionType => (
    {
      type: types.TOGGLE_IS_FOLLOWING,
      isFollowing
    }
);

interface IsFollowedActionType extends Action<typeof types.IS_FOLLOWED> {
  isFollowed: boolean
}

export const isFollowed = (isFollowed: boolean): IsFollowedActionType => (
    {
      type: types.IS_FOLLOWED,
      isFollowed
    }
);

export type ProfileActionsType =
    SetUserProfileActionType
    | SetStatusActionType
    | UpdatePhotoActionType
    | ToggleIsFollowingActionType
    | IsFollowedActionType

// ====================Thunk Creators===========================

export const followUser = (): AppThunkType => (dispatch: TDispatch, getState: () => RootState) => {
  dispatch(toggleIsFollowing(true));
  usersAPI.followUser(getState().profile.profile!.userId!)
      .then(() => {
        batch(() => {
          dispatch(isFollowed(true));
          dispatch(toggleIsFollowing(false));
          dispatch(usersActions.getFriendsDemo(6, 1));
        });
      });
};

export const unFollowUser = (): AppThunkType => (dispatch: TDispatch, getState: () => RootState) => {
  dispatch(toggleIsFollowing(true));
  usersAPI.unFollowUser(getState().profile.profile!.userId!)
      .then(() => {
        batch(() => {
          dispatch(isFollowed(false));
          dispatch(toggleIsFollowing(false));
          dispatch(usersActions.getFriendsDemo(6, 1));
        })
      });
};

export const isUserFollowed = (userId: number): AppThunkType => (dispatch: TDispatch) => {
  usersAPI.isFollowed(userId)
      .then((response) => dispatch(isFollowed(response)))
};

export const getUser = (userId: number): AppThunkType<Promise<void>> => (dispatch: TDispatch) => {
  return profileAPI.getUser(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      });
};

export const getStatus = (id: number): AppThunkType<Promise<void>> => (dispatch: TDispatch) => {
  return profileAPI.getStatus(id)
      .then((status) => {
        dispatch(setStatus(status));
      });
};

export const updateStatus = (status: string): AppThunkType<Promise<void>> => (dispatch: TDispatch) => {
  return profileAPI.updateStatus(status)
      .then(() => {
        dispatch(setStatus(status))
      });
};

export const savePhoto = (photoFile: File): AppThunkType<Promise<void>> => async (dispatch: TDispatch) => {
  let response = await profileAPI.setPhoto(photoFile);
  debugger
  dispatch(updatePhoto(response.data.photos))
};
export const saveProfile = (profile: ProfileType) => async (dispatch: TDispatch, getState: () => RootState) => {

  const response = await profileAPI.setProfile(profile);
  if (response.data.resultCode === 0) {
    if ("userId" in getState().auth.user) {
      await dispatch(getUser(getState().auth.user.userId!));
    }
  } else {
    return response.data.messages;
  }
};