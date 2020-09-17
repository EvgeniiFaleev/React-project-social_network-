import React, {useEffect, useRef} from "react";
import styles from "./Player.module.scss";
import {calculateProgress, converter} from "@music/utils";
import {playerActions} from "@music/modules/player";


export const Player = React.forwardRef(({dispatch, state, initPlayer, ...props},
  ref) => {
  const trackRef = ref;
  const hintRef = useRef();

  const onForward = () => {
    if (state.currentNumber >= 9) {
      return
    }
    const nextTrackNumber = state.currentNumber + 1;
    const query = "div[data-track_number='" + `${nextTrackNumber}` +
      "']";

    const nextTrack = document.querySelector(`${query}`);
    dispatch(playerActions.nextSong({
      currentSrc: nextTrack.dataset.url_track,
      currentAlbum: nextTrack.dataset.album_photo,
      bgPhoto: nextTrack.dataset.bg_photo,
      artist: nextTrack.dataset.artist_name,
      title: nextTrack.dataset.track_title
    }));
  };
  const onBackward = () => {
    if (state.currentNumber <= 0) return;
    const prevTrackNumber = state.currentNumber - 1;
    const query = "div[data-track_number='" + `${prevTrackNumber}` +
      "']";
    const prevTrack = document.querySelector(`${query}`);
    dispatch(playerActions.prevSong({
      currentSrc: prevTrack.dataset.url_track,
      currentAlbum: prevTrack.dataset.album_photo,
      bgPhoto: prevTrack.dataset.bg_photo,
      artist: prevTrack.dataset.artist_name,
      title: prevTrack.dataset.track_title
    }));
  };

  const seekProgress = (e) => {
    if (!isNaN(trackRef.current.duration)) {
      const duration = trackRef.current.duration;
      const percent = calculateProgress(e.pageX, e.currentTarget);
      dispatch(playerActions.setProgress(percent));
      trackRef.current.currentTime = duration / 100 * percent;
    }
  };

  const playingProgress = (e) => {
    const duration = trackRef.current.duration;
    const currentSecond = converter(trackRef.current.currentTime);
    dispatch(playerActions.setProgress({
      progress: trackRef.current.currentTime / duration * 100,
      currentSecond: currentSecond
    }));
    if (trackRef.current.ended) onForward();
  };

  const onVolume = (e) => {
    dispatch(playerActions.setVolume(e.target.value));

  };

  const showHint = (e) => {
    if (!isNaN(state.progress)) {
      const percent = calculateProgress(e.clientX, e.currentTarget);
      const result = converter(Math.floor((
        trackRef.current.duration / 100
      ) * percent));
      dispatch(playerActions.setHint(result));
      hintRef.current.style.left =
        e.clientX - e.currentTarget.getBoundingClientRect().left +
        "px";
      hintRef.current.hidden = false;
    }
  };

  const closeHint = (e) => {
    hintRef.current.hidden = true;
  };

  useEffect(() => {
    trackRef.current.volume = state.volume / 100;
  }, [state.volume]);

  return (
    <div className={styles.player}>
      <audio ref={trackRef} onTimeUpdate={playingProgress}
        onLoadedData={() => {
          dispatch(playerActions.setDuration(converter(trackRef.current.duration)))
        }}
        src={state.currentSrc}
        preload="none" data-track_number={state.currentNumber}/>
      <div onClick={initPlayer} className={styles.play_block}>
        <img
          src={state.currentAlbum} alt="player_album"/>
        {state.isPlaying ?
          <i className={"fa fa-pause" + " " + styles.pause}/> :
          <i className={"fa fa-play" + " " + styles.play}/>}

      </div>
      <div className={styles.arrows}>
        <i className="fa fa-step-backward" onClick={onBackward}
          aria-hidden="true"/>
        <i className="fa fa-step-forward" onClick={onForward}
          aria-hidden="true"/>
      </div>
      <div className={styles.progress_bar}>
        <div className={styles.title_info}>
            <span
              className={styles.title}>{state.artist} - {state.title}</span>
          <small>{state.currentSecond}
            {/*{state.duration ? "/" + state.duration : "/0 : 00"}*/}
          </small>
        </div>
        <div className={styles.progress_wrapper}>
          <progress onClick={seekProgress} max="100"
            onMouseMove={showHint} onMouseLeave={closeHint}
            value={state.progress}>
          </progress>

          <small ref={hintRef}
            className={styles.hint}>{state.hintTime}
          </small>
        </div>
      </div>

      <div className={styles.volume}>
        {state.volume > 0 ?
          <i className="fa fa-volume-up" aria-hidden="true"/> :
          <i className="fa fa-volume-off" aria-hidden="true"/>}
        <input type="range" onChange={onVolume}
          value={state.volume}/>
      </div>
    </div>
  )
});