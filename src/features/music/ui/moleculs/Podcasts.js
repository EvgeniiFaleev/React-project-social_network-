import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";


export const Podcasts = ({podcasts}) => {

  const podcastsElements = podcasts?.map((podcast) =>
    <section className={classes.artists_block} key={podcast.id}>
      <a href={podcast.link}><img className={classes.podcast_img} src={podcast.picture_big}
        alt="podcast"/></a>
      <a href={podcast.link}><p>{podcast.title}</p></a>
      <p className={classes.podcast_description}>{podcast.description}</p>
    </section>
  );

  return (
    <>
      <h3 className={classes.artists_header}>Top Podcasts</h3>
      <div className={classes.music_artists}>
        {podcastsElements || <Preloader/>}
      </div>
    </>
  )
};