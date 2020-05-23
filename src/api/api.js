import * as axios from "axios";


let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
  },
});
const usersAPI = {
// ==========================ProfilePage===============================
  getUser(id) {
    console.log("Obsolete method!Use profileAPI");
    return profileAPI.getUser(id);
  }, // ===========================UsersPage================================
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`,
        {withCredentials: true})
      .then((response) => response.data);
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then((response) => response.data);
    // ===========Fetch===================================
    // return fetch(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
    //   {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
    //     }
    //   }).then((response) => {
    //   return response.json()
    // });
  },

  unFollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then((response) => {
        console.log(response);
        return response.data
      });
  }, // ==================================Header============================

};
const authAPI = {
  me() {
    // return instance
    //   .get(`auth/me`)
    //   .then((response) => {
    //     if (response.data.resultCode === 0) return response.data
    //   });

    return fetch("https://social-network.samuraijs.com/api/1.0/auth/me",
      {
        method: "GET",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
        }
      }).then((response) => response.json()).then((response) => {
      if (response.resultCode === 0) return response.data
    })
  },

  login(formData) {

//     return instance.post("/auth/login", formData)
//       .then((response) => console.log(response))
// }
    return fetch(
      "https://social-network.samuraijs.com/api/1.0/auth/login",
      {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
        },

      })
      .then((response) => {
        return response.json();
      })
      .then((response) => { debugger
        return response
      })

  },

  logout() {
    return fetch(
      "https://social-network.samuraijs.com/api/1.0/auth/login",
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
        },
      })
      .then((response) => {
        if (response.json().resultCode === 0) return response.json;
      })
  },

  getCaptcha(){
    return instance.get("/security/get-captcha-url").then((response)=>{
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
    return fetch(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"

        }
      })
      .then((response) => response.json());
    // return instance.get(`profile/status/${id}`)
    //   .then((response) => response.data)
  },
  updateStatus(status) {
    return instance.put("profile/status", {status})
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {

          return response;
        }
      })
      .catch((e) => console.log("ОШИБКА " + e));
  },
  setPhoto(photoFile) {
    const formData = new FormData();
    formData.append("newPhoto", photoFile);
    return instance.put('/profile/photo', formData)
      .then((response) => {
        debugger
        if (response.data.resultCode === 0) {
          console.log(response);
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
export {usersAPI, authAPI, profileAPI};