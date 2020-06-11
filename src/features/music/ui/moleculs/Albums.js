import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";


export const Albums = ({albums}) => {

  const albumsElements = albums?.map((album) =>
    <section className={classes.artists_block} key={album.id}>
      <a href={album.link}><img src={album.cover_big} alt="album"/></a>
      <a href={album.artist.link}><p>{album.artist.name}</p></a>
      <p>{album.title}</p>
    </section>
  );

  return (
    <>
      <h3 className={classes.artists_header}>Top Albums</h3>
      <div className={classes.music_artists}>
        {albumsElements || <Preloader/>}
      </div>
    </>
  )
};