import * as types from "./types"
import {newsAPI} from "../../../../api/newsAPI";


export const setNews = (articles) => (
  {
    type: types.SET_NEWS,
    articles
  }
);
export const getNews = (params) => (dispatch) => {
  newsAPI.getNews(params).then((articles) => dispatch(setNews(articles)));
};
