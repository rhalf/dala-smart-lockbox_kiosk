import axios from "axios";

console.log("dslCloudApi:", process.env.VUE_APP_CLOUD_API_BASE_URL);
const admin = axios.create({
  baseURL: process.env.VUE_APP_CLOUD_API_BASE_URL,
});

console.log("authorization:", process.env.VUE_APP_AUTH_TOKEN);
admin.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`;

export default {
  //Riders
  loginRider(id, pin) {
    return admin.post(`/riders/${id}/verify-pin`, {
      pin,
    });
  },
  //Order
  fetchOrder(id) {
    return admin.get(`/orders/${id}`);
  },
  //Lockers
  fetchLockers() {
    return admin.get(`/lockers`);
  },
  //Parcel
  checkInParcel({ order, locker }) {
    return admin.post(`/lockers/${locker.id}/deposit-parcel`, {
      order_id: order.id,
    });
  },
  checkOutParcel(code) {
    return admin.post(`/pickup-parcel`, {
      pickup_code: code,
    });
  },

  verifyCheckoutParcel(messageId, otpNumber, orderId) {
    return admin.post(`/pickup-parcel/verify`, {
      message_id: messageId,
      otp: otpNumber,
      order_id: orderId,
    });
  },
};
