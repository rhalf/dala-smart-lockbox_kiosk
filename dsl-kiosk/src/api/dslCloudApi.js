import Vue from "vue";

const base_url = process.env.VUE_APP_CLOUD_API_BASE_URL;
console.log("dslCloudApi:", base_url);

export default {
  //Riders
  loginRider(id, pin) {
    return Vue.axios.post(`${base_url}/riders/${id}/verify-pin`, {
      pin,
    });
  },
  //Order
  fetchOrder(id) {
    return Vue.axios.get(`${base_url}/orders/${id}`);
  },
  //Lockers
  fetchLockers() {
    return Vue.axios.get(`${base_url}/lockers`);
  },
  //Parcel
  checkInParcel({ order, locker }) {
    return Vue.axios.post(`${base_url}/lockers/${locker.id}/deposit-parcel`, {
      order_id: order.id,
    });
  },
  checkOutParcel(code) {
    return Vue.axios.post(`${base_url}/pickup-parcel`, {
      pickup_code: code,
    });
  },

  verifyCheckoutParcel(messageId, otpNumber, orderId) {
    return Vue.axios.post(`${base_url}/pickup-parcel/verify`, {
      message_id: messageId,
      otp: otpNumber,
      order_id: orderId,
    });
  },
};
