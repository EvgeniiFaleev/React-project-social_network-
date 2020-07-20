import React from "react";
import {musicActions} from "../../modules/music";
import {Tracks} from "./Tracks/Tracks";
import {Arrow} from "../../../../ui/atoms/Arrow/Arrow";


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