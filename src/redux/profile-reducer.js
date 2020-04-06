const ADD_POST = "ADD-POST";
const POST_WATCH = "POST-WATCH";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const OPEN_USER_PROFILE = "OPEN_USER_PROFILE";

let initialState = {
  enterPosts: [{message: "Привет, как дела?", likeCount: "2 лайка"},
    {message: "Не умри от коронавируса", likeCount: "5 лайков"}],
  current: "",
  profile: null,
};
export default function profilePageReducer(state = initialState,
  action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        enterPosts: [...state.enterPosts,
          {message: state.current, likeCount: "0"}],
        current: ""
      };
    case POST_WATCH:
      return {
        ...state, current: action.value
      };
    case SET_USERS_PROFILE:
      return {
        ...state, profile: action.profile
      };
    default:
      return state;
  }
}
export const addPostActionCreator = () => (
  {type: ADD_POST}
);
export const updateNewPostActionCreator = (value) => (
  {
    type: POST_WATCH, value: value
  }
);
export const setUsersProfile = (profile) => (
  {
    type: SET_USERS_PROFILE, profile: profile
  }
);

