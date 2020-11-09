import React, {FC, ReactNode} from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";
import {IAlbum} from "@api/musicAPI";

interface IAlbumsProps {
  albums?: Array<IAlbum>
}

export const Albums:FC<IAlbumsProps> = ({albums}) => {

  const albumsElements: Array<ReactNode> | undefined  = albums?.map((album) => <Card
      key={album.id}
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