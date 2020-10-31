import  * as types from "./types"
import {ProfileType} from "@socialAPI";
import {ProfileActionsType} from "@profile/modules/profile/actions";

interface ProfileState{
  isFollowing: boolean,
  followed: boolean,
  profile: null  | ProfileType,
  status: string
}

export const initialState: ProfileState = {
  isFollowing: false,
  followed:false,
  profile: null,
  status: "Статус Редакса"
};

export const reducer = (state = initialState,
  action: ProfileActionsType): ProfileState => {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case types.SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case types.UPDATE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photo} as ProfileType
      };
    case types.TOGGLE_IS_FOLLOWING:
      return{
        ...state,
        isFollowing: action.isFollowing
      };
      case types.IS_FOLLOWED:
      return{
        ...state,
        followed: action.isFollowed
      };
    default:
      return state;
  }
};
