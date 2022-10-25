import ssoApi from "@/api/ssoApi";

export default {
  setRider(context, payload) {
    context.commit("SET_RIDER", payload);
  },

  async fetchByIdPin({ commit }, payload) {
    try {
      const response = await ssoApi.loginRider(payload);
      commit("SET_RIDER", response.data.data.rider);
      return response;
    } catch {
      return null;
    }
  },
};
