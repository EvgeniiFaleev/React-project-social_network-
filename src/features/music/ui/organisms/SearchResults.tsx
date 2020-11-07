import React, { FC } from "react";
import {musicActions} from "@music/modules/music";
import {Tracks} from "@music/ui//moleculs/Tracks/Tracks";
import {Arrow} from "@ui/atoms/Arrow/Arrow";
import {IMusicCategory, ITracks} from "@api/musicAPI";
import {TDispatch} from "@store/index";

export interface ISearchResultsProps {
  searchResults : undefined | Array<ITracks>
  dispatch: TDispatch
}

export const SearchResults:FC<ISearchResultsProps> = ({searchResults, dispatch}) => {


  const onBackToChart = (): void => {
    dispatch(musicActions.setSearchResults(null));
  };


  return (

    <Tracks tracks={searchResults}>
      <>
        <Arrow back={onBackToChart}/> Search Results
      </>
    </Tracks>
  )
};