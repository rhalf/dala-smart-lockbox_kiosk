import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

console.log({
  client_id: process.env.VUE_APP_CLIENT_ID,
  client_secret: process.env.VUE_APP_CLIENT_SECRET,
});

let tokenJson = localStorage.getItem("token");
let token = {};
if (tokenJson) token = JSON.parse(tokenJson);
console.log("token", token);

console.log("cu48bApi:", process.env.VUE_APP_LOCAL_API_LOCKER_URL);
const cu48bApi = axios.create({
  baseURL: process.env.VUE_APP_LOCAL_API_LOCKER_URL,
});

console.log("ssoApi:", process.env.VUE_APP_CLOUD_API_SSO_URL);
const ssoApi = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_SSO_URL,
  // headers: { Authorization: `${token.token_type} ${token.access_token}` },
  headers: { Authorization: `Bearer ${token.accessToken}` },
});

export { cu48bApi, ssoApi };
