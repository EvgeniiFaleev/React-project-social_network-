import { IArticle } from "@api/newsAPI";
import  * as types from "./types"
import {ISetNews} from "@news/modules/news/actions";

type NewsStateType =  {
  articles: Array<IArticle> | null
}

export const initialState: NewsStateType = {
articles: null
};

export const reducer = (state = initialState,
  action: ISetNews): NewsStateType => {
  switch (action.type) {
    case types.SET_NEWS:
      return {
        ...state,
       articles: action.articles
      };
    default:
      return state;
  }
};
