import axios, {AxiosResponse} from "axios";

export interface ResponseDataType<T = {}> {
  resultCode: number,
  messages: Array<any> | string,
  data: T
}

type ContactsType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}
export type PhotosType = {
  small: string | null,
  large: string | null
}

export type ProfileType = {
  aboutMe?: null | string,
  userId?: number | null,
  lookingForAJob?: boolean  | null,
  lookingForAJobDescription?: string | null,
  fullName?: string | null,
  contacts?: ContactsType | null,
  photos?: PhotosType | null
}

export type LoginInfoType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
  logError?: string
};

export type UserInfoType = {
  id: number,
  email: string,
  login: string
}

export type UsersItemType = {
  name: string,
  id: number,
  photos: PhotosType,
  status: null | string,
  followed: boolean
}

export type UsersType = {
  items: Array<UsersItemType>,
  totalCount?: number,
  error?: string | null
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

  getUsers(pageSize: number, currentPage: number,
           isFriend: boolean, term: string = ""): Promise<UsersType> {
    return instance
        .get(`users?count=${pageSize}&page=${currentPage}&friend=${isFriend}&term=${term}`)
        .then((response) => response.data);
  },

  followUser(userId: number): Promise<ResponseDataType | void | never> {
    return instance.post(`follow/${userId}`)
        .then((response) => {
          if (response.data.resultCode === 0) {
            return response.data
          } else {
            throw new Error("Ошибка в followUser")
          }
        }).catch((e) => console.log(e));
  },

  unFollowUser(userId: number): Promise<ResponseDataType | void | never> {
    return instance.delete(`follow/${userId}`)
        .then((response) => {
          if (response.data.resultCode === 0) {
            return response.data
          } else {
            throw new Error("Ошибка в unFollowUser")
          }
        }).catch((e) => console.log(e));
  },

  isFollowed(userId: number): Promise<boolean> {
    return instance.get(`follow/${userId}`)
        .then((response) => response.data);
  }
};


const authAPI = {
  me(): Promise<UserInfoType> {
    return instance
        .get(`/auth/me`)
        .then((response) => {
          if (response.data.resultCode === 0) return response.data.data;
        });
  },

  login(formData: LoginInfoType): Promise<ResponseDataType> {

    return instance.post("/auth/login", formData)
        .then((response) => {
          return response.data;
        });
  },

  logout(): Promise<ResponseDataType> {

    return instance.delete("/auth/login").then((response) => {
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
  getUser(id: number): Promise<ProfileType> {
    return instance
        .get(`profile/${id}`)
        .then((response) => {
          return response.data
        });
  },

  getStatus(id: number): Promise<string> {

    return instance.get(`profile/status/${id}`)
        .then((response) => response.data)
  },

  updateStatus(status: string ): Promise<ResponseDataType | void> {
    return instance.put("profile/status", {status})
        .then((response) => {
          if (response.data.resultCode === 0) {

            return response.data;
          }
        }).catch((e) => console.log("ОШИБКА " + e));
  },

  setPhoto(photoFile: File): Promise<ResponseDataType<{photos:PhotosType}> | never> {
    const formData = new FormData();
    formData.append("newPhoto", photoFile);
    return instance.put('/profile/photo', formData)
        .then((response) => {
          if (response.data.resultCode === 0) {
            return response.data;
          }
        });
  },

  setProfile(profile: Omit<ProfileType, "photos">): Promise<AxiosResponse<ResponseDataType>> {
    return instance.put('/profile/', profile).then((response) => {
      return response;
    })
  }
};

export type DialogsItemType = {
  hasNewMessages: boolean,
  id: number,
  lastDialogActivityDate: string,
  lastUserActivityDate: string,
  newMessagesCount: number,
  photos: PhotosType,
  userName: string
}

export type DialogType = {
  addedAt: string
  body: string
  deletedByRecipient: boolean
  deletedBySender: boolean
  distributionId: null
  id: string
  isSpam: boolean
  recipientId: number
  recipientName: string
  senderId: number
  senderName: string
  translatedBody: null
  viewed: boolean
}
const dialogsAPI = {

  getNewMessagesCount(): Promise<number | void> {
    return instance.get("/dialogs/messages/new/count")
        .then((response) => {
          return response.data
        })
        .catch((e) => console.log("Ошибка " + e));
  },


  getDialogs(): Promise<Array<DialogsItemType> | void > {
    return instance.get("/dialogs")
        .then((response) => {
          console.log(response);
          return response.data
        }).catch((e)=> console.log(e));
  },

  startDialog(userId:number): Promise<AxiosResponse<ResponseDataType>> {
    return instance.put(`/dialogs/${userId}`)
        .then((response) => response);
  },

  sendMessage(userId:number, message:string):  Promise<AxiosResponse<ResponseDataType>> {
    return instance.post(`/dialogs/${userId}/messages`,
        {body: message})
        .then((response) => response);
  },

  getDialog(id:number): Promise<Array<DialogType>> {
    return instance.get(`dialogs/${id}/messages/new?newerThen=2020-02-04T16:01:53.417`)
        .then((response) => {
          console.log(response.data.items);
          return response.data
        });
  }
};
export {usersAPI, authAPI, profileAPI, dialogsAPI};