import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";


export const Tracks = ({tracks}) => {


  const tracksElements = tracks?.map((track) =>
    <section key={track.id} className={classes.track_block}>
      <a href={track.artist.link}>
        <img alt="artist_image" src={track.album.cover_small}/>
      </a>
      <span>{track.artist.name} - {track.title}</span>
      <audio controls  src={track.preview}/>
    </section>);

  return (
    <div className={classes.music_tracks}>
    <h3 className={classes.category_header}>Top tracks</h3>
    {tracksElements || <Preloader/>}
  </div>
  )};