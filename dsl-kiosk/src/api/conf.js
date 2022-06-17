import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

let tokenJson = localStorage.getItem("token");
let token = {};
if (tokenJson) token = JSON.parse(tokenJson);
console.log("token", token);

console.log("adminApi:", process.env.VUE_APP_CLOUD_API_ADMIN_URL);
const adminApi = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_ADMIN_URL,
  headers: { Authorization: `${token.token_type} ${token.access_token}` },
});

console.log("cu48bApi:", process.env.VUE_APP_LOCAL_API_LOCKER_URL);
const cu48bApi = axios.create({
  baseURL: process.env.VUE_APP_LOCAL_API_LOCKER_URL,
});

console.log("ssoApi:", process.env.VUE_APP_CLOUD_API_SSO_URL);
const ssoApi = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_SSO_URL,
});

export { adminApi, cu48bApi, ssoApi };
