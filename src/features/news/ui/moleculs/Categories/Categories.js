import styles from "./Categories.module.scss";
import React from "react";
import {newsActions} from "../../../modules/news";


export const Categories = ({dispatch}) => {

  const onCategoryChoose = (event) => {
    if (event.target.classList.contains(styles.categories_category)) {
      const category = `&category=${event.target.dataset.cat}`;
      console.log(category);
      dispatch(newsActions.getNews({
        category
      }))
    }
  };

  return (
    <section onClick={onCategoryChoose} className={styles.categories}>
      <div data-cat="general"
        className={styles.categories_category + " " +
        styles.all}>All
      </div>
      <div data-cat="business"
        className={styles.categories_category + " " +
        styles.business}>Business
      </div>
      <div data-cat="entertainment"
        className={styles.categories_category + " " +
        styles.entertaiment}>Entertainment
      </div>
      <div data-cat="science"
        className={styles.categories_category + " " +
        styles.science}>Science
      </div>
      <div data-cat="sports"
        className={styles.categories_category + " " +
        styles.sport}>Sports
      </div>
      <div data-cat="technology"
        className={styles.categories_category + " " +
        styles.technology}>Technology
      </div>
    </section>
  );
};