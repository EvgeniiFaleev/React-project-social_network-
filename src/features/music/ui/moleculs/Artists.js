import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";


export const Artists = ({artists}) => {
  
  const artistsElements = artists?.map((artist) =>
    <section className={classes.artists_block} key={artist.id}>
      <a href={artist.link}><img src={artist.picture_big} alt="artist"/></a>
      <p>{artist.name}</p>
    </section>
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