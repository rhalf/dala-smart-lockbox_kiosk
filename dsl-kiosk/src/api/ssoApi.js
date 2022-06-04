import axios from "axios";

console.log("ssoApi:", process.env.VUE_APP_CLOUD_API_SSO_URL);
const sso = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_SSO_URL,
});

// console.log("authorization:", process.env.VUE_APP_AUTH_TOKEN);
// sso.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`;

export default {
  //loginLocker
  fetchToken() {
    return sso.post(`/login/locker-controller/`, {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
    });
  },
};
