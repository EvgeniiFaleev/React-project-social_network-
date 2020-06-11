import * as axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
  },
});
const usersAPI = {

  getUser(id) {
    console.log("Obsolete method!Use profileAPI");
    return profileAPI.getUser(id);
  },

  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`,
        {withCredentials: true})
      .then((response) => response.data);
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then((response) => response.data);
  },

  unFollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};


const authAPI = {
  me() {
    return instance
      .get(`/auth/me`)
      .then((response) => {
        if (response.data.resultCode === 0) return response.data.data;
      });
  },

  login(formData) {

    return instance.post("/auth/login", formData)
      .then((response) => {
        return response.data;
      });
  },

  logout() {

    return instance.delete("/auth/login").then((response) => {
      if (response.resultCode === 0) return response;
    });
  },

  getCaptcha() {
    return instance.get("/security/get-captcha-url")
      .then((response) => {
        return response.data.url;
      })
  }
};

const profileAPI = {
  getUser(id) {
    return instance
      .get(`profile/${id}`)
      .then((response) => {
        return response.data
      });
  },

  getStatus(id) {

    return instance.get(`profile/status/${id}`)
      .then((response) => response.data)
  },

  updateStatus(status) {
    return instance.put("profile/status", {status})
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {

          return response;
        }
      }).catch((e) => console.log("ОШИБКА " + e));
  },

  setPhoto(photoFile) {
    const formData = new FormData();
    formData.append("newPhoto", photoFile);
    return instance.put('/profile/photo', formData)
      .then((response) => {
        if (response.data.resultCode === 0) {
          return response;
        }
      });
  },

  setProfile(profile) {
    return instance.put('/profile/', profile).then((response) => {
      return response;
    })
  }
};

const dialogsAPI = {

  getDialogs() {
    return instance.get("/dialogs")
      .then((response) => { console.log(response);
        return response.data});
  },

  startDialog(userId) {
    return instance.put(`/dialogs/${userId}`)
      .then((response) => response);
  },

  sendMessage(userId, message) {
    return instance.post(`/dialogs/${userId}/messages`, {body: message})
      .then((response) => response);
  },

  getDialog(id) {
    return instance.get(`dialogs/${id}/messages`)
      .then((response) => response.data.items);
  }
};
export {usersAPI, authAPI, profileAPI, dialogsAPI};