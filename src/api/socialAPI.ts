import axios from "axios";

export interface ResponseDataType {
  resultCode: number,
  messages: Array<any> | string,
  data: object
}

type contacts = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}
type photos = {
  small: string,
  large: string
}

export interface ProfileType {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: contacts,
  photos: photos
}

export type LoginInfoType = {
  password: string,
  email: string
};

export interface UserInfoType {
  id: number,
  email: string,
  login: string
}

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "65ef668c-9986-4b60-8a04-69abb862c8d8"
  },
});
const usersAPI = {

  getUser(id: number): Promise<ProfileType> {
    console.log("Obsolete method!Use profileAPI");
    return profileAPI.getUser(id);
  },

  getUsers(pageSize: number, currentPage: number, isFriend: boolean, term: string = "") {
    return instance
        .get(`users?count=${pageSize}&page=${currentPage}&friend=${isFriend}&term=${term}`)
        .then((response) => response.data);
  },

  followUser(userId: number) {
    return instance.post(`follow/${userId}`)
        .then((response) => {
          if (response.data.resultCode === 0) {
            return response.data
          } else {
            throw new Error("Ошибка в followUser")
          }
        }).catch((e) => console.log(e));
  },

  unFollowUser(userId:number) {
    return instance.delete(`follow/${userId}`)
        .then((response) => {
          if (response.data.resultCode === 0) {
            return response.data
          } else {
            throw new Error("Ошибка в unFollowUser")
          }
        }).catch((e) => console.log(e));
  },

  isFollowed(userId) {
    return instance.get(`follow/${userId}`)
        .then((response) => response.data);
  }
};


const authAPI = {
  me() :Promise<UserInfoType>{
    return instance
        .get(`/auth/me`)
        .then((response) => {
          if (response.data.resultCode === 0) return response.data.data;
        });
  },

  login(formData: LoginInfoType) :Promise<ResponseDataType>{

    return instance.post("/auth/login", formData)
        .then((response) => {
          return response.data;
        });
  },

  logout() : Promise<ResponseDataType> {

   return  instance.delete("/auth/login").then((response) => {
      if (response.data.resultCode === 0) return response.data;
    });
  },

  getCaptcha(): Promise<string> {
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

  getNewMessagesCount() {
    return instance.get("/dialogs/messages/new/count")
        .then((response) => {
          return response.data
        })
        .catch((e) => console.log("Ошибка " + e));
  },


  getDialogs() {
    return instance.get("/dialogs")
        .then((response) => {
          console.log(response);
          return response.data
        });
  },

  startDialog(userId) {
    return instance.put(`/dialogs/${userId}`)
        .then((response) => response);
  },

  sendMessage(userId, message) {
    return instance.post(`/dialogs/${userId}/messages`,
        {body: message})
        .then((response) => response);
  },

  getDialog(id) {
    return instance.get(`dialogs/${id}/messages/new?newerThen=2020-02-04T16:01:53.417`)
        .then((response) => {
          console.log(response.data.items);
          return response.data
        });
  }
};
export {usersAPI, authAPI, profileAPI, dialogsAPI};