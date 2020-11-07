import * as types from "./types"
import {
  IMusicCategory,
  IMusicResponse,
  ITracks,
  musicApi
} from "@api/musicAPI";
import {Action} from "redux";
import {AppThunkType, TDispatch} from "@store";

interface ISetMusicChartsAction extends Action<typeof types.SET_MUSIC_CHARTS> {
  charts: IMusicResponse
}

export const setMusicCharts = (charts: IMusicResponse): ISetMusicChartsAction => (
    {
      type: types.SET_MUSIC_CHARTS,
      charts
    }
);

interface ISetSearchResults extends Action<typeof types.SET_SEARCH_RESULTS> {
  searchResults: IMusicCategory<ITracks> | null
}

export const setSearchResults = (searchResults: IMusicCategory<ITracks> | null): ISetSearchResults => (
    {
      type: types.SET_SEARCH_RESULTS,
      searchResults
    }
);

export type MusicActionsType = ISetMusicChartsAction | ISetSearchResults;

export const getMusicChart = (): AppThunkType => (dispatch: TDispatch) => {
  musicApi.getMusicChart()
      .then((charts) => {
        dispatch(setMusicCharts(charts as IMusicResponse))
      });
};

export const search = (query: string): AppThunkType<void> => (dispatch: TDispatch) => {
  musicApi.search(query).then((searchResults) => {
    dispatch(setSearchResults((searchResults as IMusicCategory<ITracks>)))
  })
};