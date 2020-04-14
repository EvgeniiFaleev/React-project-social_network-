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
    return instance
      .get(`profile/${id}`)
      .then((response) => response.data);
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
  login() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  }
}
export {usersAPI, authAPI};