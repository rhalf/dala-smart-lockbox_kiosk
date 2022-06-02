import axios from "axios";

console.log("cu48bApi:", process.env.VUE_APP_LOCAL_API_LOCKER_URL);
const locker = axios.create({
  baseURL: process.env.VUE_APP_LOCAL_API_LOCKER_URL,
});

// console.log("authorization:", process.env.VUE_APP_AUTH_TOKEN);
// admin.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`;

export default {
  unlockCu48b(payload) {
    return locker.post(`/cu48b/${payload.id}`);
  },
  unlockAllCu48b() {
    return locker.delete(`/cu48b/`);
  },
  fetchCu48b() {
    return locker.get(`/cu48b/`);
  },
};
