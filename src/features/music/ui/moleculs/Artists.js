import React from "react";
import {Card} from "../templates/card/Card";
import {Cards} from "../templates/cards/Cards";


export const Artists = ({artists}) => {
  
  const artistsElements = artists?.map((artist) =>
    <Card
    id={artist.id} link={artist.link} picture={artist.picture_big}
    artistName={artist.name}
    />
  );

  return (
    <>
      <Cards header="Top Artists">
      {artistsElements}
      </Cards>
    </>
  )
};