import classes from "../../Music.module.scss";
import {Preloader} from "../../../../ui";
import React from "react";
import {Card} from "../templates/card/Card";
import {Cards} from "../templates/cards/Cards";


export const Albums = ({albums}) => {

  const albumsElements = albums?.map((album) =>
    <Card
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