import classes from "../../News.module.scss";
import React, {FC, ReactNode} from "react";
import {Preloader} from "@ui";
import {useSelector} from "react-redux";
import {Article} from "@news/ui/moleculs/Article/Article";
import {RootState} from "@store/root-reducer";


export const Articles: FC = () => {


  const articles = useSelector((state: RootState) => (
      state.news.articles
  ));

  let articleElements: Array<ReactNode> | undefined | string = articles?.map((item,index) => {
    return <Article key={index} {...item}/>
  });

  if (articleElements?.length === 0) {
    articleElements = "Sorry nothing found";
  }

  return (
      articles ?
          <section
              className={classes.news}>
            {articleElements || <Preloader/>}
          </section> :
          <Preloader/>
  )
};