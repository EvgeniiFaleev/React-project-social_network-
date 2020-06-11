import * as types from "./types"
import {musicApi} from "../../../../api/musicAPI";


export const setMusicCharts = (charts) => (
  {
    type: types.SET_MUSIC_CHARTS,
    charts
  }
);
export const setSearchResults = (searchResults) => (
  {
    type: types.SET_SEARCH_RESULTS,
    searchResults
  }
);

export const getMusicChart = (category) => (dispatch) => {
  musicApi.getMusicChart(category)
    .then((charts) => {
      dispatch(setMusicCharts(charts))
    });
};

export const search = (query) => (dispatch) =>{
 return  musicApi.search(query).then((searchResults) => {
   dispatch(setSearchResults((searchResults)))
  })
};