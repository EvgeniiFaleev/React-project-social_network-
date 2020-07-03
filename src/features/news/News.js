import React, {useEffect} from "react";
import classes from "./News.module.scss";
import {newsActions} from "./"
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../../ui";
import {Categories} from "./ui/moleculs/Categories/Categories";
import {Articles} from "./ui/Organisms/Articles";
import {Search} from "./ui/moleculs/Search/Search";


export const News = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.getNews({}))
  }, [dispatch]);







  return <div className={classes.news_wrapper}>
   <Search dispatch={dispatch}/>
    <Categories dispatch={dispatch}/>
    <Articles/>
  </div>;
};
