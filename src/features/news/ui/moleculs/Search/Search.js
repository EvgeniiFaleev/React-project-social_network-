import React from "react";
import {newsActions} from "../../../modules/news";
import classes from "./Search.module.scss"


export const Search = ({dispatch}) => {

  const onSearch = (event) => {
    event.preventDefault();
    const query = event.target.search_query.value;
    dispatch(newsActions.getNews({
      query: `q=${query}`,
      category: "",
      country: ""
    }))
  };

  return (
    <section id={classes.cover}>
      <form onSubmit={onSearch} autoComplete="off">
        <div className={classes.search_block}>
          <div className={classes.search_query}>
            <input className={classes.search_query} name="search_query"
              placeholder="Search..." type="text"/>
          </div>
          <div className={classes.search_btn} id={classes['s-cover']}>
            <button type="submit">
              <div id={classes['s-circle']}></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </section>
  )
};
