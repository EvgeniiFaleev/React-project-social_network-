import React from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";


export const Playlists = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) => <Card
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