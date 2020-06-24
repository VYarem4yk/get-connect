import Axios from "axios";
const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "33da53e4-fe0b-47ff-91cd-c7c0aee9ed04",
  },
});

export const usersAPI = {
  getUsers(curentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${curentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  unfollowUsers(userID) {
    return instance
      .delete(`follow/${userID}`)
      .then((response) => response.data);
  },

  followUsers(userID) {
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },
};

export const authorisationAPI = {
  login() {
    return instance.get("auth/me").then((response) => response.data);
  },
};

export const profileAPI = {
  setProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(user)
};
