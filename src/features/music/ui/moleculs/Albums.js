import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Plate} from "../atoms/plate";


export const Albums = ({albums}) => {

  const albumsElements = albums?.map((album) =>
    <Plate
    id={album.id} picture={album.cover_big}
    artistName={album.artist.name}
    title={album.title} pictureLink={album.link}
    artistLink={album.artist.link}
  />);

  return (
    <>
      <h3 className={classes.artists_header}>Top Albums</h3>
      <div className={classes.music_artists}>
        {albumsElements || <Preloader/>}
      </div>
    </>
  )
};