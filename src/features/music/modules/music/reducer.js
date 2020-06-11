import  * as types from "./types"

export const initialState = {
charts: null,
  searchResults: null
};

export const reducer = (state = initialState,
  action) => {
  switch (action.type) {
    case types.SET_MUSIC_CHARTS:
      return {
        ...state,
       charts: action.charts
      };
      case types.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      };
    default:
      return state;
  }
};
