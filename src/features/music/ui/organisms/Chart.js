import classes from "../../Music.module.scss";
import {Tracks} from "../moleculs/Tracks/Tracks";
import {Artists} from "../moleculs/Artists";
import {Albums} from "../moleculs/Albums";
import {Podcasts} from "../moleculs/Podcasts";
import {Playlists} from "../moleculs/Playlists";
import React from "react";
import {shallowEqual, useSelector} from "react-redux";


export const Chart = () => {

  const {tracks, artists, albums, podcasts, playlists } = useSelector(
    (state) => (
      {
        tracks: state.music.charts?.tracks?.data,
        artists: state.music.charts?.artists?.data,
        albums: state.music.charts?.albums?.data,
        podcasts: state.music.charts?.podcasts?.data,
        playlists: state.music.charts?.playlists?.data,
      }
    ),
    shallowEqual);
return(
  <div className={classes.music}>
    <Tracks tracks={tracks} children={"Top Tracks"}/>
    <Artists artists={artists}/>
    <Albums albums={albums}/>
    <Podcasts podcasts={podcasts}/>
    <Playlists playlists={playlists}/>
  </div>
)
};
