import React from "react";
import {useForm} from "react-hook-form";
import {musicActions} from "@music/modules/music";
import styles from "./Search.module.scss"

export const Search = ({dispatch}) => {

  const {register, handleSubmit} = useForm();
  const onSearch = ({query}) => {
    dispatch(musicActions.search(query));
  };

return(
  <div className={styles.search}>
    <form onSubmit={handleSubmit(onSearch)}>
      <input autoComplete="off" ref={register({required: true})} name="query"
        type="text"/>
      <i className="fa fa-search"></i>
    </form>
  </div>
)
};