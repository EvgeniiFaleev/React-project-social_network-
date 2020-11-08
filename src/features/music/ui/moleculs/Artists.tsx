import React, {FC, ReactNode} from "react";
import {Card} from "@music/ui/templates/card/Card";
import {Cards} from "@music/ui/templates/cards/Cards";
import {IArtist} from "@api/musicAPI";

interface IArtistsProps {
  artists?: Array<IArtist>
}

export const Artists: FC<IArtistsProps> = ({artists}) => {

  const artistsElements: Array<ReactNode> | undefined = artists?.map((artist) =>
      <Card
          id={artist.id} link={artist.link}
          picture={artist.picture_big}
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