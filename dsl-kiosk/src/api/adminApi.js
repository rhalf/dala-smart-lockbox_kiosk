import axios from "axios";

console.log("adminApi:", process.env.VUE_APP_CLOUD_API_ADMIN_URL);
const admin = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_ADMIN_URL,
});

console.log("authorization:", process.env.VUE_APP_AUTH_TOKEN);
admin.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`;

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
    return admin.post(`/pickup-parcel/verify`, {
      message_id: payload.messageId,
      otp: payload.otpNumber,
      order_id: payload.orderId,
    });
  },
};
