import * as types from "./types"
import {Action} from "redux";

type SongInfoType = {
  currentSrc: string,
  currentAlbum: string,
  bgPhoto: string,
  artist: string,
  title: string
}

interface INextSongAction extends Action<typeof types.NEXT_SONG> {
  payload: SongInfoType
}

export const nextSong = (payload: SongInfoType): INextSongAction => (
    {
      type: types.NEXT_SONG,
      payload
    }
);

interface ISetHintAction extends Action<typeof types.SET_HINT> {
  payload: string
}

export const setHint = (payload: string): ISetHintAction => (
    {
      type: types.SET_HINT,
      payload
    }
);

interface IToggleIsPlayingAction extends Action<typeof types.TOGGLE_IS_PLAYING> {
  payload: boolean
}

export const toggleIsPlaying = (payload: boolean): IToggleIsPlayingAction => (
    {
      type: types.TOGGLE_IS_PLAYING,
      payload
    }
);

interface ISetDurationAction extends Action<typeof types.SET_DURATION> {
  payload: string
}

export const setDuration = (payload: string): ISetDurationAction => (

    {
      type: types.SET_DURATION,
      payload
    }
);

interface IPrevSongAction extends Action<typeof types.PREV_SONG> {
  payload: SongInfoType
}

export const prevSong = (payload: SongInfoType): IPrevSongAction => (
    {
      type: types.PREV_SONG,
      payload
    }
);

interface ISetSongAction extends Action<typeof types.SET_SONG> {
  payload: SongInfoType
}

export const setSong = (payload: SongInfoType & {currentNumber? : number}): ISetSongAction => (
    {
      type: types.SET_SONG,
      payload
    }
);

interface ISetProgressAction extends Action<typeof types.SET_PROGRESS> {
  payload: {
    progress?: number,
    currentSecond?: string
  }
}

export const setProgress = (payload: ISetProgressAction["payload"]): ISetProgressAction => (
    {
      type: types.SET_PROGRESS,
      payload
    }
);

interface ISetVolumeAction extends Action<typeof types.SET_VOLUME> {
  payload: number
}

export const setVolume = (payload: number): ISetVolumeAction => (
    {
      type: types.SET_VOLUME,
      payload
    }
);

export type PlayerActionsType =
    INextSongAction
    | ISetHintAction
    | IToggleIsPlayingAction
    | ISetDurationAction
    | IPrevSongAction
    | ISetSongAction
    | ISetProgressAction
    | ISetVolumeAction