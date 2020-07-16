import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Card} from "../templates/card/Card";
import {Cards} from "../templates/cards/Cards";


export const Playlists = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) =>
    <Card
    id={playlist.id} pictureLink={playlist.link}
    picture={playlist.picture_big}
    // title={playlist.title}
  />);

  return (
    <>
      <Cards header="Top Playlists">
        {playlistsElements}
      </Cards>
    </>
  )
};