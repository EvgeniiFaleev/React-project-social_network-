import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {musicActions} from "@music/modules/music";
import {SearchResults} from "@music/ui/organisms/SearchResults";
import {Search} from "@music/ui/organisms/Search/Search";
import {Chart} from "@music/ui/organisms/Chart";
import styles from "./Music.module.scss"


export const Music = () => {

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.music?.searchResults?.data);

  useEffect(() => {
    dispatch(musicActions.setSearchResults(null));
    dispatch(musicActions.getMusicChart());

  }, [dispatch]);


  return (
    <section className={styles.music_wrapper}>
      <Search dispatch={dispatch}/>
      {searchResults ?
        <SearchResults searchResults={searchResults}
          dispatch={dispatch}/> :
        <Chart/>}
    </section>
  )
};
