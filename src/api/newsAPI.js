import * as axios from "axios";


const instance = axios.create({
  baseURL: "https://newsapi.org/v2"
});
export const newsAPI = {
  getNews({type = "top-headlines", country = "country=us",
    category = "&category=general", query=""}) {
    return instance.get(`/${type}?${country}${category}${query}&apiKey=9f6b4297388249849db6c199fd357b24`)
      .then((response) => {
        if (response.data.status === "ok") { debugger
          console.log(response.data.articles);
          return response.data.articles
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
};