import React from "react";
import classes from "../../Music.module.scss";
import {musicActions} from "../../modules/music";


export const SearchResults = ({searchResults, dispatch}) => {


  const onBackToChart = () => {
    dispatch(musicActions.setSearchResults(null));
  };

  const searchElements = searchResults?.map((result) => <section
    key={result.id} className={classes.track_block}>
    <a href={result.link}>
      <img alt="artist_image" src={result.album.cover_small}/>
    </a>
    <span><a href={result.artist.link}>{result.artist.name}</a> -
      {result.title}</span>
    <audio controls src={result.preview}/>
  </section>);

  return (
    <div className={classes.music}>
      <h1 onClick={onBackToChart}>Back to chat</h1>
      {searchElements}
    </div>
  )
};