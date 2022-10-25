import { ssoApi } from "./conf";

export default {
  //loginLocker
  // login() {
  //   return ssoApi.post(`/login/locker-controller/`, {
  //     client_id: process.env.VUE_APP_CLIENT_ID,
  //     client_secret: process.env.VUE_APP_CLIENT_SECRET,
  //   });
  // },
  login() {
    return ssoApi.post(`/lock-boxes/login`, {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
    });
  },

  //Order
  readOrder(payload) {
    return ssoApi.get(`/orders/deposit-code/${payload.code}`);
  },
  //Boards
  // readBoards() {
  //   return ssoApi.get(`/v2/lockers`);
  // },

  //Boards
  readBoards() {
    return ssoApi.get(`/lockers`);
  },
  // OPDP = Open Locker (Deposit)
  // CLDP = Close Locker (Deposit)
  // OPPK = Open Locker (Pickup)
  // CLPK = Close Locker (Pickup)
  lockerOpen(payload) {
    return ssoApi.post(`/lockers/${payload.locker.id}/open`, {
      action_code: payload.type == "check-in" ? "OPDP" : "OPPK",
      order_id: payload.order.id,
    });
  },
  lockerClose(payload) {
    return ssoApi.post(`/lockers/${payload.locker.id}/close`, {
      action_code: payload.type == "check-in" ? "CLDP" : "CLPK",
      order_id: payload.order.id,
    });
  },
  lockerOpenState(payload) {
    return ssoApi.post(`/lockers/${payload.locker.id}/open-state`, {
      minutes: payload.minutes,
      order_id: payload.order.id,
    });
  },
  //Parcel
  checkInParcel(payload) {
    return ssoApi.post(`/lockers/${payload.locker.id}/deposit-parcel`, {
      order_id: payload.order.id,
    });
  },
  checkOutParcel(payload) {
    return ssoApi.post(`/pickup-parcel`, {
      pickup_code: payload.code,
    });
  },

  verifyCheckoutParcel(payload) {
    return ssoApi.post(`/pickup-parcel/verify`, {
      otp: payload.otpNumber,
      message_id: String(payload.messageId),
      order_id: String(payload.orderId),
    });
  },

  connectionStatus() {
    return ssoApi.get(`/health-check`);
  },
};
