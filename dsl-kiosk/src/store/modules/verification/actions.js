// import ssoApi from "@/api/ssoApi";

export default {
  setPickupCode(context, payload) {
    context.commit("SET_PICKUP_CODE", payload);
  },
  setMessageId(context, payload) {
    context.commit("SET_MESSAGE_ID", payload);
  },
  setOrderId(context, payload) {
    context.commit("SET_ORDER_ID", payload);
  },
};
