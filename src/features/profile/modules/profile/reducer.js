import  * as types from "./types"

export const initialState = {
  enterPosts: [{
    message: "Привет, как дела?",
    likeCount: "2 лайка",
    id: 1
  }, {
    message: "Не умри от коронавируса",
    likeCount: "5 лайков",
    id:2
  }],
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
    default:
      return state;
  }
};
