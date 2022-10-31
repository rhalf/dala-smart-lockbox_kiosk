import ssoApi from "@/api/ssoApi";

export default {
  setToken(context, payload) {
    context.commit("SET_TOKEN", payload);
  },

  async login({ commit }) {
    try {
      const response = await ssoApi.login();
      commit("SET_TOKEN", response.data);
      return response;
    } catch {
      return null;
    }
  },
};
