
import * as types from "./types"

export const initialState = {
  currentAlbum: "",
  bgPhoto: "",
  currentNumber: 0,
  currentSrc: "",
  progress: 0,
  volume: 50,
  duration: "",
  currentSecond: "",
  hintTime: "",
  isPlaying: false,
  artist: "",
  title: "",
};


export  function reducer(state, action) {
  switch (action.type) {
    case types.NEXT_SONG:
      return {
        ...state, ...action.payload,
        currentNumber: state.currentNumber + 1
      };
    case types.PREV_SONG:
      return {
        ...state, ...action.payload,
        currentNumber: state.currentNumber - 1,
      };
    case types.SET_SONG:
      return {
        ...state, ...action.payload
      };
    case types.SET_PROGRESS:
      return {
        ...state, ...action.payload
      };
    case types.SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case types.SET_DURATION:
      return {
        ...state,
        duration: action.payload
      };
    case types.SET_HINT:
      return {
        ...state,
        hintTime: action.payload
      };
    case types.TOGGLE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload
      };
    default:
      throw new Error();
  }
}