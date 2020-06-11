import * as axios from "axios";


const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://api.deezer.com/'
});

export const musicApi = {
  getMusicChart() {
    return instance.get(`chart/`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  search(query){
    return instance.get(`/search?q=${query}`).then((response)=>{
      return response.data
    }).catch((err) => console.log(err))
  }
};

