import classes from "../../Music.module.scss";
import React from "react";
import {Card} from "../templates/card/Card";
import {Cards} from "../templates/cards/Cards";


export const Podcasts = ({podcasts}) => {

  const podcastsElements = podcasts?.map((podcast) => {

    return <Card
      id={podcast.id} pictureLink={podcast.link}
      picture={podcast.picture_big}
      // title={podcast.title}
    >
      <p
        className={classes.podcast_description}>{podcast.description}</p>
    </Card>
  });

  return (
    <>
      <Cards header="Top Podcasts">
        {podcastsElements}
      </Cards>
    </>
  )
};