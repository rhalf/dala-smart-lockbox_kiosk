import axios from "axios";

console.log("adminApi:", process.env.VUE_APP_CLOUD_API_ADMIN_URL);
const admin = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_ADMIN_URL,
});

const token = JSON.parse(localStorage.getItem("token"));
console.log("token", token);

if (token) {
  admin.defaults.headers.common[
    "Authorization"
  ] = `${token.token_type} ${token.access_token}`;
}

export default {
  //Riders
  loginRider(payload) {
    return admin.post(`/riders/${payload.id}/verify-pin`, {
      pin: payload.pin,
    });
  },
  //Order
  fetchOrder(payload) {
    return admin.get(`/orders/${payload.id}`);
  },
  //Lockers
  fetchLockers() {
    return admin.get(`/lockers`);
  },
  //Parcel
  checkInParcel(payload) {
    return admin.post(`/lockers/${payload.locker.id}/deposit-parcel`, {
      order_id: payload.order.id,
    });
  },
  checkOutParcel(payload) {
    return admin.post(`/pickup-parcel`, {
      pickup_code: payload.code,
    });
  },

  verifyCheckoutParcel(payload) {
    console.log("payload", payload);
    return admin.post(`/pickup-parcel/verify`, {
      otp: payload.otpNumber,
      message_id: payload.messageId,
      order_id: payload.orderId,
    });
  },

  connectionStatus() {
    return admin.get(`/health-check`);
  },
};
