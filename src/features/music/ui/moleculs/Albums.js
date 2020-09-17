import React from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";


export const Albums = ({albums}) => {

  const albumsElements = albums?.map((album) => <Card
    id={album.id} picture={album.cover_big}
    artistName={album.artist.name}
    title={album.title}
    link={album.link}
    font_size="1rem"
  />);

  return (
    <>
      <Cards header="Top Albums">
        {albumsElements}
      </Cards>
    </>
  )
};