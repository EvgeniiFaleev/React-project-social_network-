import * as types from "./types"
import {InitActions} from "@auth/modules/initialization/actions";

interface InitState {
  initialized: boolean,
  isFetching: boolean
}

export const initialState: InitState = {
  initialized: false,
  isFetching: false
};

export const reducer = (state = initialState, action: InitActions): InitState => {
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