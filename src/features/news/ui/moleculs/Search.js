import classes from "../../News.module.scss";
import React from "react";
import {newsActions} from "../../modules/news";


export const Search = ({dispatch}) => {

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

  return (
    <section className={classes.search}>
      <form onSubmit={onSearch}>
        <input name="search_query" type="text"/>
        <button>Search</button>
        <label><input type="checkbox" name="search_everywhere"/>
          search everywhere</label>
      </form>
    </section>
  )
};