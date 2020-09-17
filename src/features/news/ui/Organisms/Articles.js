import classes from "../../News.module.scss";
import React from "react";
import {Preloader} from "@ui";
import {useSelector} from "react-redux";
import {Article} from "@news/ui/moleculs/Article/Article";


export const Articles = () => {


  const articles = useSelector((state) => (
    state.news.articles
  ));

  let articleElements = articles?.map((item) => {
    return <Article {...item}/>
  });

  if (articleElements?.length === 0) {
    articleElements = "Sorry nothing found";
  }

return(
  articles ?
  <section
    className={classes.news}>
    {articleElements || <Preloader/>}
  </section> :
    <Preloader/>
)
};