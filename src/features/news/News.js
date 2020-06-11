import React, {useEffect} from "react";
import classes from "./News.module.scss";
import {newsActions} from "./"
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../../ui";


export const News = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.getNews({}))
  }, [dispatch]);

  const articles = useSelector((state) => (
    state.news.articles
  ));
  let articleElements = articles?.map((item) => {
    return <article className={classes.news_article}
      key={item.url}>
      <h3 className={classes.news_article_tile}>{item.title}</h3>
      <p className={classes.news_article_photo}><img
        src={item.urlToImage} alt="img_News"/></p>
      <p
        className={classes.news_article_description}>{item.description}</p>
      <p className={classes.news_article_content}>{item.content}</p>
      <p className={classes.news_article_author}>{item.author}</p>
      <p
        className={classes.news_article_src}>Source{item.source.name}</p>
      <a href={item.url}>Link</a>
    </article>
  });

  if (articleElements?.length === 0) {
    articleElements = "Sorry nothing found";
  }

  const onCategoryChoose = (event) => {
    if (event.target.classList.contains(classes.categories_category)) {
      const category = `&category=${event.target.dataset.cat}`;
      console.log(category);
      dispatch(newsActions.getNews({
        category
      }))
    }
  };

  const onSearch = (event) => {
    event.preventDefault();
    const query = event.target.search_query.value;
    const isEverywhere = event.target.search_everywhere.checked;
    if (query && isEverywhere) {
      dispatch(newsActions.getNews({
        type: "everything",
        query: `q=${query}`,
        category: "",
        country: ""
      }))
    } else if (query){
      dispatch(newsActions.getNews({
        query: `q=${query}`,
        category: "",
        country: ""
      }))
    }
  };

  return <div className={classes.news_wrapper}>
    <section className={classes.search}>
      <form onSubmit={onSearch}>
        <input name="search_query" type="text"/>
        <button>Search</button>
        <label><input type="checkbox" name="search_everywhere"/>
          search everywhere</label>
      </form>
    </section>
    <section onClick={onCategoryChoose} className={classes.categories}>
      <div data-cat="general"
        className={classes.categories_category}>General
      </div>
      <div data-cat="business"
        className={classes.categories_category}>Business
      </div>
      <div data-cat="entertainment"
        className={classes.categories_category}>Entertainment
      </div>
      <div data-cat="science"
        className={classes.categories_category}>Science
      </div>
      <div data-cat="sports"
        className={classes.categories_category}>Sports
      </div>
      <div data-cat="technology"
        className={classes.categories_category}>Technology
      </div>
    </section>
    <section
      className={classes.news}>
      {articleElements || <Preloader/>}</section>
  </div>;
};
