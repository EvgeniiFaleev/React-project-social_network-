import {CommonTemplate} from "../../ui/templates/Common";
import React from "react";
import {Music, musicActions} from "../../features/music";
import {useDispatch} from "react-redux";


export const MusicPage = () => {
  const dispatch = useDispatch();
  const clearSearch = () => {
    dispatch(musicActions.setSearchResults(null));
  };


  return (
    <CommonTemplate clearMusicSearch={clearSearch}>
      <Music/>
    </CommonTemplate>
  )
};