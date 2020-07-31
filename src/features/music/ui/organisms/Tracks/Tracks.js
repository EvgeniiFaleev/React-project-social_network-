import styles from "./Tracks.module.scss"
import {Preloader} from "../../../../../ui";
import React, {useEffect, useReducer, useRef} from "react";
import {converter} from "../../../utils"
import {Player} from "../Player/Player";
import {
  playerActions, playerInitialState, playerReducer
} from "../../../modules/player";


export const Tracks = ({tracks, children}) => {

  const trackRef = useRef();

  useEffect(() => {
    if (tracks) {
      dispatch(playerActions.setSong({
        currentAlbum: tracks[0].album.cover_small,
        currentSrc: tracks[0].preview,
        bgPhoto: tracks[0].artist.picture_xl,
        artist: tracks[0].artist.name,
        title: tracks[0].title
      }))
    }
  }, [tracks]);

  const [state, dispatch] = useReducer(playerReducer,
    playerInitialState);

  const initPlayer = (e) => {
    if (e.currentTarget.dataset.url_track && state.currentSrc !==
      e.currentTarget.dataset.url_track) {
      dispatch((
        playerActions.setSong({
          currentNumber: +e.currentTarget.dataset.track_number,
          currentSrc: e.currentTarget.dataset.url_track,
          currentAlbum: e.currentTarget.dataset.album_photo,
          bgPhoto: e.currentTarget.dataset.bg_photo,
          artist: e.currentTarget.dataset.artist_name,
          title: e.currentTarget.dataset.track_title
        })
      ));
    } else {
      onPlay();
    }
  };

  const onPlay = () => {
    if (trackRef.current.paused) {
      trackRef.current.play();
      dispatch(playerActions.toggleIsPlaying(true));
      console.log("play")
    } else {
      trackRef.current.pause();
      dispatch(playerActions.toggleIsPlaying(false));
    }
  };

  useEffect(() => {
    if (state.currentSrc.length > 0) onPlay();
  }, [state.currentNumber]);

  const tracksElements = tracks?.map((track, index) => {
    let playing;
    if (state.currentNumber === index) {
      playing = styles.track_album_playing;
    } else {
      playing = "";
    }

    return <div key={track.id} className={styles.track_container}>
      <div
        data-url_track={track.preview}
        data-track_number={index}
        data-album_photo={track.album.cover_small}
        data-bg_photo={track.artist.picture_xl}
        data-track_title={track.title}
        data-artist_name={track.artist.name}
        onClick={initPlayer}
        className={styles.track_album + " " + playing}>
        <img
          alt="artist_image" src={track.album.cover_small}/>
        <i className="fa fa-play"/>
      </div>
      <div className={styles.track_title}>
        <a href={track.artist.link}>
          <span>{track.artist.name} - {track.title}</span>
        </a>
        <small
          className={styles.track_title_duration}>{converter(track.duration)}
        </small>
      </div>
    </div>
  });

  return (
    <>

      { tracksElements ?
        <Player ref={trackRef} dispatch={dispatch} state={state}
          initPlayer={initPlayer}/> :
        <Preloader/> }
      <div className={styles.music_tracks}>
        <h3 className={styles.category_header}>{children}</h3>
        {tracksElements || <Preloader/>}
      </div>
    </>
  )
};