import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Plate} from "../atoms/Plate";


export const Artists = ({artists}) => {
  
  const artistsElements = artists?.map((artist) =>
    <Plate
    id={artist.id} pictureLink={artist.link} picture={artist.picture_big}
    artistName={artist.name}
    />
  );

  return (
    <>
      <h3 className={classes.artists_header}>Top Artists</h3>
      <div className={classes.music_artists}>
      {artistsElements || <Preloader/>}
      </div>
    </>
  )
};