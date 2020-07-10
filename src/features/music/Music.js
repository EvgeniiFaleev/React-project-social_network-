import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {musicActions} from "./";
import {SearchResults} from "./ui/moleculs/SearchResults";
import {Search} from "./ui/moleculs/Search/Search";
import {Chart} from "./ui/organisms/Chart";
import styles from"./Music.module.scss"

export const Music = () => {

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.music?.searchResults?.data);

  useEffect(() => {
    dispatch(musicActions.setSearchResults(null));
    dispatch(musicActions.getMusicChart())

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
