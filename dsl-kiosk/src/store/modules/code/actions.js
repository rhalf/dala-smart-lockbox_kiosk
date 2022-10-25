// import ssoApi from "@/api/ssoApi";

export default {
  async setCode(context, payload) {
    context.commit("SET_CODE", payload);
  },
};
