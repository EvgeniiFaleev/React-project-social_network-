import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {musicActions} from "./";
import {SearchResults} from "./ui/moleculs/SearchResults";
import {Search} from "./ui/moleculs/Search";
import {Chart} from "./ui/organisms/Chart";


export const Music = () => {

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.music?.searchResults?.data);

  useEffect(() => {
    dispatch(musicActions.setSearchResults(null));
    dispatch(musicActions.getMusicChart())

  }, [dispatch]);


  return (
    <>
      <Search dispatch={dispatch}/>
      {searchResults ?
        <SearchResults searchResults={searchResults}
          dispatch={dispatch}/> :
        <Chart/>}
    </>
  )
};
