import ssoApi from "../../../api/ssoApi";

export default {
  setToken(context, payload) {
    context.commit("SET_TOKEN", payload);
  },

  async fetchToken({ commit }) {
    try {
      const response = await ssoApi.fetchToken();
      commit("SET_TOKEN", response.data);
      return response;
    } catch {
      return null;
    }
  },
};
