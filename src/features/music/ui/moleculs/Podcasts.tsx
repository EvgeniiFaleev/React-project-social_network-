import classes from "../../Music.module.scss";
import React, {FC, ReactNode} from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";
import {IPodcasts} from "@api/musicAPI";

interface IPodcastsProps {
  podcasts?: Array<IPodcasts>
}

export const Podcasts: FC<IPodcastsProps> = ({podcasts}) => {

  const podcastsElements: Array<ReactNode> | undefined = podcasts?.map((podcast) => {
    return <Card key={podcast.id}
        id={podcast.id} pictureLink={podcast.link}
        picture={podcast.picture_big}>
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