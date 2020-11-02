import axios, {AxiosInstance, AxiosResponse} from "axios";


const instance: AxiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2"
});

export interface INewsParams {
  type: string,
  country: string,
  category: string,
  query: string
}

interface INewsData {
  articles: Array<Article>
  status: string,
  totalResults: number,
}

export interface Article {
  author: string,
  content: string,
  description: string,
  publishedAt: string
}

export const newsAPI = {
  getNews({
            type = "top-headlines", country = "country=us",
            category = "&category=general", query = ""
          }: INewsParams): Promise<Array<Article> | void> {
    return instance.get(`/${type}?${country}${category}${query}&apiKey=9f6b4297388249849db6c199fd357b24`)
        .then((response: AxiosResponse<INewsData>) => {
          if (response.data.status === "ok") {
            console.log(response.data.articles);
            return response.data.articles
          } else {
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
  }
};