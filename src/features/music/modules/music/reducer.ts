import {IMusicCategory, IMusicResponse, ITracks} from "@api/musicAPI";
import * as types from "./types"
import {MusicActionsType} from "@music/modules/music/actions";

type MusicStateType = {
  charts: null | IMusicResponse,
  searchResults : null | IMusicCategory<ITracks>
}

export const initialState: MusicStateType = {
  charts: null,
  searchResults: null
};

export const reducer = (state = initialState,
                        action: MusicActionsType): MusicStateType => {
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
