import { ssoApi } from "./conf";

export default {
  //Riders
  loginRider(payload) {
    return ssoApi.post(`/riders/${payload.id}/verify-pin`, {
      pin: payload.pin,
    });
  },
  //Order
  readOrder(payload) {
    return ssoApi.get(`/orders/${payload.id}`);
  },
  //Boards
  readBoards() {
    return ssoApi.get(`/v2/lockers`);
  },
  // OPDP = Open Locker (Deposit)
  // CLDP = Close Locker (Deposit)
  // OPPK = Open Locker (Pickup)
  // CLPK = Close Locker (Pickup)
  lockerOpen(payload) {
    const lockerId = payload.locker ? payload.locker.id : "";
    return ssoApi.post(`/lockers/${lockerId}/open`, {
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
    console.log("payload", payload);
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
