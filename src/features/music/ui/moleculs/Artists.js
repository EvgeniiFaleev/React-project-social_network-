import React from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";


export const Artists = ({artists}) => {

  const artistsElements = artists?.map((artist) => <Card
    id={artist.id} link={artist.link} picture={artist.picture_big}
    artistName={artist.name}
  />);

  return (
    <>
      <Cards header="Top Artists">
        {artistsElements}
      </Cards>
    </>
  )
};