import { ssoApi } from "./conf";

export default {
  //loginLocker
  fetchToken() {
    return ssoApi.post(`/login/locker-controller/`, {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
    });
  },
};
