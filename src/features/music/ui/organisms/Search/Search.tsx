import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {musicActions} from "@music/modules/music";
import styles from "./Search.module.scss"
import {TDispatch} from "@store/index";

interface ISearchProps {
  dispatch: TDispatch
}

interface ISearchForm {
  query: string
}

export const Search: FC<ISearchProps> = ({dispatch}) => {

  const {register, handleSubmit} = useForm<ISearchForm>();
  const onSearch = ({query}: ISearchForm) => {
    dispatch(musicActions.search(query));
  };

  return (
      <div className={styles.search}>
        <form onSubmit={handleSubmit(onSearch)}>
          <input autoComplete="off" ref={register({required: true})}
              name="query"
              type="text"/>
          <i className="fa fa-search"/>
        </form>
      </div>
  )
};