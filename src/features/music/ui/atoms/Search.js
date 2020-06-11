import React from "react";
import {useForm} from "react-hook-form";
import {musicActions} from "../../modules/music";


export const Search = ({dispatch}) => {

  const {register, handleSubmit} = useForm();
  const onSearch = ({query}) => {
    dispatch(musicActions.search(query));
  };

return(
  <div className="search">
    <form onSubmit={handleSubmit(onSearch)}>
      <input ref={register({required: true})} name="query"
        type="text"/>
      <button>search</button>
    </form>
  </div>
)
};