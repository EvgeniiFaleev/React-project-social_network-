import classes from "../../News.module.scss";
import React from "react";


export const Article =
  ({title, urlToImage, description, content, author, url, source}) => {

  return <article className={classes.news_article}
    key={url}>
    <h3 className={classes.news_article_tile}>{title}</h3>
    <p className={classes.news_article_photo}><img
      src={urlToImage} alt="img_News"/></p>
    <p
      className={classes.news_article_description}>{description}</p>
    <p className={classes.news_article_content}>{content}</p>
    <p className={classes.news_article_author}>{author}</p>
    <p
      className={classes.news_article_src}>Source{source.name}</p>
    <a href={url}>Link</a>
  </article>
};
