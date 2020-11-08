import styles from "./Categories.module.scss";
import React, {FC} from "react";
import {newsActions} from "@news/modules/news";
import {TDispatch} from "@store/index";

interface ICategoriesProps {
  dispatch: TDispatch
}

export const Categories: FC<ICategoriesProps> = ({dispatch}) => {

  const onCategoryChoose = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains(styles.categories_category)) {
      const category = `&category=${target.dataset.cat}`;
      dispatch(newsActions.getNews({
        category
      }))
    }
  };

  return (
      <section onClick={onCategoryChoose}
          className={styles.categories}>
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