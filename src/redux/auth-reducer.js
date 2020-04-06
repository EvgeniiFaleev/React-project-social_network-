const AUTH_USER = "AUTH_USER";

let initialState = {
  user: {
    login: null, email: null, id: null
  }
};
export default function authUserReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state, user: action.user
      };
    default:
      return state;

  }
}

export const authUser= (user) => (
  {
    type: AUTH_USER, user
  }
);
