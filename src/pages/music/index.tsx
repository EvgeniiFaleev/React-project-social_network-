import {CommonTemplate} from "@ui/templates/Common";
import React, {FC} from "react";
import {Music, musicActions} from "@music";
import {useDispatch} from "react-redux";


export const MusicPage: FC = () => {
  const dispatch = useDispatch();
  const clearSearch = (): void => {
    dispatch(musicActions.setSearchResults(null));
  };


  return (
    <CommonTemplate clearMusicSearch={clearSearch}>
      <Music/>
    </CommonTemplate>
  )
};