import React from "react";
import {musicActions} from "@music/modules/music";
import {Tracks} from "@music/ui//moleculs/Tracks/Tracks";
import {Arrow} from "@ui/atoms/Arrow/Arrow";


export const SearchResults = ({searchResults, dispatch}) => {


  const onBackToChart = () => {
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