import {authAPI} from "../api/api";


const AUTH_USER = "AUTH_USER";

let initialState = {
  user: {
    login: null, email: null, id: null, isAuth: false
  }
};
export default function authUserReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state, user: {...action.user, isAuth: true}
      };
    default:
      return state;

  }
}
// ==========Action Creators======================
export const authUser = (user) => (
  {
    type: AUTH_USER, user
  }
);
// =====================Thunk Creators====================

export const login = () => (dispatch) => {
  authAPI.login().then((data) => {
    if(data.messages.length === 0 )dispatch(authUser(data.data));
  });
};