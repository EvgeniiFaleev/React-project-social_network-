import React, {FC, useEffect} from "react";
import classes from "./News.module.scss";
import {newsActions} from "@news/modules/news"
import {useDispatch} from "react-redux";
import {Categories} from "@news/ui/moleculs/Categories/Categories";
import {Articles} from "@news/ui/Organisms/Articles";
import {Search} from "@news/ui/moleculs/Search/Search";


export const News: FC = () => {

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
