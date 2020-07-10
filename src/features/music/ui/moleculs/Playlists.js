import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Plate} from "../atoms/Plate";


export const Playlists = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) =>
    <Plate
    id={playlist.id} pictureLink={playlist.link}
    picture={playlist.picture_big}
    title={playlist.title}
  />);

  return (
    <>
      <h3 className={classes.artists_header}>Top Playlists</h3>
      <div className={classes.music_artists}>
        {playlistsElements || <Preloader/>}
      </div>
    </>
  )
};