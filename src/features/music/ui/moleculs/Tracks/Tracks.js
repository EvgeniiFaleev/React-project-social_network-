import styles from "./Tracks.module.scss"
import {Preloader} from "../../../../../ui";
import React, {useEffect, useReducer, useRef, useState} from "react";


const NEXT_SONG = "NEXT_SONG";
const PREV_SONG = "PREV_SONG";
const SET_SONG = "SET_SONG";

const nextSong = (payload) => ({
  type: NEXT_SONG,
  payload
});

const prevSong = (payload) => ({
  type: PREV_SONG,
  payload
});

const setSong = (payload) => ({
  type: SET_SONG,
  payload
});

function reducer(state, action) {
  switch (action.type) {
    case NEXT_SONG:
      return {
        ...state,
        currentSrc: action.payload,
        currentNumber: ++state.currentNumber
      };
    case PREV_SONG:
      return {
        ...state,
        currentSrc: action.payload,
        currentNumber: --state.currentNumber
      };
    case SET_SONG:
      return {
        ...state,
        ...action.payload
      };
    default:
      throw new Error();
  }
}

export const Tracks = ({tracks}) => {

  const trackRef = useRef();



  const initialState = {
    currentNumber : 0,
    currentSrc : tracks ? tracks[0].preview :
      "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  window.s= state;
  const initPlayer = (e) => {
    console.log(e.currentTarget.dataset);
    if (e.currentTarget.dataset.url_track && state.currentSrc !==
      e.currentTarget.dataset.url_track) {
      dispatch((setSong({
        currentNumber:  +e.currentTarget.dataset.track_number,
        currentSrc: e.currentTarget.dataset.url_track,
      })))
      console.log (state.currentNumber)
    } else {  console.log (state.currentNumber)
      onPlay()
    }
  };

  const onPlay = () => {
    if (trackRef.current.paused) {
      trackRef.current.play();
      console.log("play")
    } else {
      trackRef.current.pause();
    }
  };

  const onForward = (e) => {
    if(state.currentNumber >= 9) {console.log (state.currentNumber); return};
    const nextTrackNumber = state.currentNumber + 1;
    const query = "div[data-track_number='"
      + `${nextTrackNumber}` + "']";
    console.log(query)
    const nextTrack = document.querySelector(`${query}`);
    dispatch(nextSong(nextTrack.dataset.url_track));
  };


  const onBackward = () =>{
    if(state.currentNumber <= 0) return;
    const prevTrackNumber = state.currentNumber -1 ;
    const query = "div[data-track_number='"
      + `${prevTrackNumber}` + "']";
    const prevTrack = document.querySelector(`${query}`);
    dispatch(prevSong(prevTrack.dataset.url_track));
  };

  useEffect(()=>{
    onPlay()
  }, [state.currentSrc]);



  const tracksElements = tracks?.map((track, index) => <div key={track.id}
    className={styles.track_block}>

    <div data-url_track={track.preview} data-track_number={index} onClick={initPlayer}
      className={styles.play_block}>{index}
      <img
        alt="artist_image" src={track.album.cover_small}/>
      <i className="fa fa-play"></i>
      <i className="fa fa-pause"></i>
    </div>

    <a href={track.artist.link}>
      <span>{track.artist.name} - {track.title}</span>
    </a>
  </div>);


  return (
    <>
      <audio ref={trackRef} controls
        src={state.currentSrc}
        preload="none" data-track_number={state.currentNumber}/>
      <div className={styles.player}>
        <div onClick={initPlayer} className={styles.play_block}>
          <img
            src={tracks ?
              tracks[0].album.cover_small :
              ""} alt="player_album"/>
          <i className="fa fa-play"></i>
          <i className="fa fa-pause"></i>
        </div>
        <progress max="100" value="80"></progress>
        <i className="fa fa-step-backward"  onClick={onBackward} aria-hidden="true"></i>
        <i className="fa fa-step-forward" onClick={onForward} aria-hidden="true"></i>
      </div>
      <div className={styles.music_tracks}>
        <h3 className={styles.category_header}>Top tracks</h3>
        {tracksElements || <Preloader/>}
      </div>
    </>
  )
};