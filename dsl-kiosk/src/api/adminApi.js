import { adminApi } from "./conf";

export default {
  //Riders
  loginRider(payload) {
    return adminApi.post(`/riders/${payload.id}/verify-pin`, {
      pin: payload.pin,
    });
  },
  //Order
  fetchOrder(payload) {
    return adminApi.get(`/orders/${payload.id}`);
  },
  //Boards
  fetchBoards() {
    return adminApi.get(`/v2/lockers`);
  },
  // OPDP = Open Locker (Deposit)
  // CLDP = Close Locker (Deposit)
  // OPPK = Open Locker (Pickup)
  // CLPK = Close Locker (Pickup)
  lockerOpen(payload) {
    const lockerId = payload.locker ? payload.locker.id : "";
    return adminApi.post(`/lockers/${lockerId}/open`, {
      action_code: payload.type == "check-in" ? "OPDP" : "OPPK",
      order_id: payload.order.id,
    });
  },
  lockerClose(payload) {
    return adminApi.post(`/lockers/${payload.locker.id}/close`, {
      action_code: payload.type == "check-in" ? "CLDP" : "CLPK",
      order_id: payload.order.id,
    });
  },
  lockerOpenState(payload) {
    return adminApi.post(`/lockers/${payload.locker.id}/open-state`, {
      minutes: payload.minutes,
      order_id: payload.order.id,
    });
  },
  //Parcel
  checkInParcel(payload) {
    return adminApi.post(`/lockers/${payload.locker.id}/deposit-parcel`, {
      order_id: payload.order.id,
    });
  },
  checkOutParcel(payload) {
    return adminApi.post(`/pickup-parcel`, {
      pickup_code: payload.code,
    });
  },

  verifyCheckoutParcel(payload) {
    console.log("payload", payload);
    return adminApi.post(`/pickup-parcel/verify`, {
      otp: payload.otpNumber,
      message_id: String(payload.messageId),
      order_id: String(payload.orderId),
    });
  },

  connectionStatus() {
    return adminApi.get(`/health-check`);
  },
};
