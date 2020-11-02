import * as types from "./types"
import {Article, INewsParams, newsAPI} from "@api/newsAPI";
import {Action} from "redux";
import {AppThunkType, TDispatch} from "@store";

export interface ISetNews extends Action<typeof types.SET_NEWS> {
  articles: Array<Article>
}

export const setNews = (articles: Array<Article>): ISetNews => (
    {
      type: types.SET_NEWS,
      articles
    }
);

export const getNews = (params: INewsParams): AppThunkType => (dispatch: TDispatch) => {
  newsAPI.getNews(params).then((articles) => {
    if (articles) dispatch(setNews(articles))
  });
};
