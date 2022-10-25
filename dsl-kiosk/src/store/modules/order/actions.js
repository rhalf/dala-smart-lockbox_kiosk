// import ssoApi from "@/api/ssoApi";

export default {
  async setOrder(context, payload) {
    await context.commit("SET_ORDER", payload);
  },
};
