import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Plate} from "../atoms/Plate";


export const Podcasts = ({podcasts}) => {

  const podcastsElements = podcasts?.map((podcast) => {

    return <Plate
      id={podcast.id} pictureLink={podcast.link}
      picture={podcast.picture_big}
      title={podcast.title}>
      <p
        className={classes.podcast_description}>{podcast.description}</p>
    </Plate>
  });

  return (
    <>
      <h3 className={classes.artists_header}>Top Podcasts</h3>
      <div className={classes.music_artists}>
        {podcastsElements || <Preloader/>}
      </div>
    </>
  )
};