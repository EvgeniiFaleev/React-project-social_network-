import  * as types from "./types"

export const initialState = {
articles: null
};

export const reducer = (state = initialState,
  action) => {
  switch (action.type) {
    case types.SET_NEWS:
      debugger
      return {
        ...state,
       articles: action.articles
      };
    default:
      return state;
  }
};
