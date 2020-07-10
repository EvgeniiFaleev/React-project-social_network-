import  * as types from "./types"

export const initialState = {
  isFollowing: false,
  followed:false,
  profile: null,
  status: "Статус Редакса"
};

export const reducer = (state = initialState,
  action) => {
  switch (action.type) {
    case types.ADD_POST:
      return {
        ...state,
        enterPosts: [...state.enterPosts, {
          message: action.newMessageBody,
          likeCount: "0"
        }],
      };
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
        profile: {...state.profile, photos: action.photo}
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
