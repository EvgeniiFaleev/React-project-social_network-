import classes from "../../News.module.scss";
import React from "react";
import {newsActions} from "../../modules/news";


export const Categories = ({dispatch}) => {

  const onCategoryChoose = (event) => {
    if (event.target.classList.contains(classes.categories_category)) {
      const category = `&category=${event.target.dataset.cat}`;
      console.log(category);
      dispatch(newsActions.getNews({
        category
      }))
    }
  };

return(
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
);
};