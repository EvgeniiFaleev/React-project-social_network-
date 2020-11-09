import React, {FC} from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";
import {IPlayLists} from "@api/musicAPI";

interface IPlaylistsProps {
  playlists?: Array<IPlayLists>
}

export const Playlists:FC<IPlaylistsProps> = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) => <Card
      key={playlist.id}
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