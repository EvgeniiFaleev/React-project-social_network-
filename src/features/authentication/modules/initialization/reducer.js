import * as types from "./types"

export const initialState = {
  initialized: false,
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case types.INITIALIZED_SUCCESS:
        return {
          ...state,
          initialized: true
        };
    case types.TOGGLE_IS_FETCHING:
          return {
            ...state,
            isFetching: action.isFetching
          };
    default:
      return state;

  }
};