import * as types from "./types"

export const nextSong = (payload) => (
  {
    type: types.NEXT_SONG,
    payload
  }
);
export const setHint = (payload) => (
  {
    type: types.SET_HINT,
    payload
  }
);

export const toggleIsPlaying = (payload) => (
  {
    type: types.TOGGLE_IS_PLAYING,
    payload
  }
);

export const setDuration = (payload) => (
  {
    type: types.SET_DURATION,
    payload
  }
);

export const prevSong = (payload) => (
  {
    type: types.PREV_SONG,
    payload
  }
);

export const setSong = (payload) => (
  {
    type: types.SET_SONG,
    payload
  }
);

export const setProgress = (payload) => (
  {
    type: types.SET_PROGRESS,
    payload
  }
);
export const setVolume = (payload) => (
  {
    type: types.SET_VOLUME,
    payload
  }
);