import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";


export const Playlists = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) =>
    <section className={classes.artists_block} key={playlist.id}>
      <a href={playlist.link}><img className={classes.podcast_img}
        src={playlist.picture_big}
        alt="podcast"/></a>
      <p>{playlist.title}</p>
  </section>);

  return (
    <>
      <h3 className={classes.artists_header}>Top Playlists</h3>
      <div className={classes.music_artists}>
        {playlistsElements || <Preloader/>}
      </div>
    </>
  )
};