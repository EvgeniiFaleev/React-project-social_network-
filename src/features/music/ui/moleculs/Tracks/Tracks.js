import styles from "./Tracks.module.scss"
import {Preloader} from "../../../../../ui";
import React, {useEffect, useReducer, useRef} from "react";


const NEXT_SONG = "NEXT_SONG";
const PREV_SONG = "PREV_SONG";
const SET_SONG = "SET_SONG";
const SET_PROGRESS = "SET_PROGRESS";
const SET_VOLUME = "SET_VOLUME";
const SET_DURATION = "SET_DURATION";
const SET_HINT = "SET_HINT";
const TOGGLE_IS_PLAYING = "TOGGLE_IS_PLAYING";

const nextSong = (payload) => (
  {
    type: NEXT_SONG,
    payload
  }
);
const setHint = (payload) => (
  {
    type: SET_HINT,
    payload
  }
);

const toggleIsPlaying = (payload) => (
  {
    type: TOGGLE_IS_PLAYING,
    payload
  }
)
const setDuration = (payload) => (
  {
    type: SET_DURATION,
    payload
  }
);

const prevSong = (payload) => (
  {
    type: PREV_SONG,
    payload
  }
);

const setSong = (payload) => (
  {
    type: SET_SONG,
    payload
  }
);

const setProgress = (payload) => (
  {
    type: SET_PROGRESS,
    payload
  }
);
const setVolume = (payload) => (
  {
    type: SET_VOLUME,
    payload
  }
);

function reducer(state, action) {
  switch (action.type) {
    case NEXT_SONG:
      return {
        ...state, ...action.payload,
        currentNumber: state.currentNumber + 1
      };
    case PREV_SONG:
      return {
        ...state, ...action.payload,
        currentNumber: state.currentNumber - 1,
      };
    case SET_SONG:
      return {
        ...state, ...action.payload
      };
    case SET_PROGRESS:
      return {
        ...state, ...action.payload
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload
      };
    case SET_HINT:
      return {
        ...state,
        hintTime: action.payload
      };
    case TOGGLE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload
      };
    default:
      throw new Error();
  }
}

const converter = (duration) => {
  const minutes = Math.floor(duration / 60);
  let seconds = String(Math.floor(duration % 60));
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  const result = minutes + " : " + seconds;
  return result;
};

const initialState = {
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

export const Tracks = ({tracks, children}) => {
  const trackRef = useRef();
  const hintRef = useRef();

  useEffect(() => {
    if (tracks) {
      dispatch(setSong({
        currentAlbum: tracks[0].album.cover_small,
        currentSrc: tracks[0].preview,
        bgPhoto: tracks[0].artist.picture_xl,
        artist: tracks[0].artist.name,
        title: tracks[0].title
      }))
    }
  }, [tracks]);

  const [state, dispatch] = useReducer(reducer, initialState);

  window.s = state;
  const initPlayer = (e) => {
    console.log(e.currentTarget.dataset);
    if (e.currentTarget.dataset.url_track && state.currentSrc !==
      e.currentTarget.dataset.url_track) {
      dispatch((
        setSong({
          currentNumber: +e.currentTarget.dataset.track_number,
          currentSrc: e.currentTarget.dataset.url_track,
          currentAlbum: e.currentTarget.dataset.album_photo,
          bgPhoto: e.currentTarget.dataset.bg_photo,
          artist: e.currentTarget.dataset.artist_name,
          title: e.currentTarget.dataset.track_title
        })
      ));
      console.log(state.currentNumber);
    } else {
      console.log(state.currentNumber);
      onPlay();
    }
  };
  const onPlay = () => {
    if (trackRef.current.paused) {
      trackRef.current.play();
      dispatch(toggleIsPlaying(true));
      console.log("play")
    } else {
      trackRef.current.pause();
      dispatch(toggleIsPlaying(false));
    }
  };
  useEffect(() => {
    if (state.currentSrc.length > 0) onPlay();
  }, [state.currentNumber]);


  const onForward = () => {
    if (state.currentNumber >= 9) {
      console.log(state.currentNumber);
      return
    }
    ;const nextTrackNumber = state.currentNumber + 1;
    const query = "div[data-track_number='" + `${nextTrackNumber}` +
      "']";
    console.log(query)
    const nextTrack = document.querySelector(`${query}`);
    dispatch(nextSong({
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
    dispatch(prevSong({
      currentSrc: prevTrack.dataset.url_track,
      currentAlbum: prevTrack.dataset.album_photo,
      bgPhoto: prevTrack.dataset.bg_photo,
      artist: prevTrack.dataset.artist_name,
      title: prevTrack.dataset.track_title
    }));
  };


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


  const calculateProgress = (mouseX, progressElement) => {
    const barWidth = progressElement.getBoundingClientRect().right -
      progressElement.getBoundingClientRect().left;
    const scrollPos = Math.abs(mouseX -
      progressElement.getBoundingClientRect().left);
    const percentToScroll = scrollPos / barWidth * 100;
    return percentToScroll;
  };


  const seekProgress = (e) => {
    if (!isNaN(trackRef.current.duration)) {
      const duration = trackRef.current.duration;
      const percent = calculateProgress(e.pageX, e.currentTarget);
      dispatch(setProgress(percent));
      trackRef.current.currentTime = duration / 100 * percent;
    }
  };

  const playingProgress = (e) => {
    const duration = trackRef.current.duration;
    const currentSecond = converter(trackRef.current.currentTime);
    dispatch(setProgress({
      progress: trackRef.current.currentTime / duration * 100,
      currentSecond: currentSecond
    }));
    if (trackRef.current.ended) onForward();
  };
  useEffect(() => {
    trackRef.current.volume = state.volume / 100;
  }, [state.volume]);

  const onVolume = (e) => {
    dispatch(setVolume(e.target.value));

  };

  const showHint = (e) => {
    if (!isNaN(state.progress)) {
      const percent = calculateProgress(e.clientX, e.currentTarget);
      const result = converter(Math.floor((
        trackRef.current.duration / 100
      ) * percent));
      dispatch(setHint(result));
      hintRef.current.style.left =
        e.clientX - e.currentTarget.getBoundingClientRect().left +
        "px";
      hintRef.current.hidden = false;
    }
  };
  const closeHint = (e) => {
    hintRef.current.hidden = true;
  };

  return (
    <>
      <div className={styles.player}>
        <audio ref={trackRef} onTimeUpdate={playingProgress}
          onLoadedData={() => {
            dispatch(setDuration(converter(trackRef.current.duration)))
          }}
          src={state.currentSrc}
          preload="none" data-track_number={state.currentNumber}/>
        <div onClick={initPlayer} className={styles.play_block}
          // style={{backgroundImage: `url(${state.bgPhoto})`}}
        >
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
            <small>{state.currentSecond}{state.duration ?
              "/" + state.duration :
              "/0 : 00"} </small>
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
      <div className={styles.music_tracks}>
        <h3 className={styles.category_header}>{children}</h3>
        {tracksElements || <Preloader/>}
      </div>
    </>
  )
};