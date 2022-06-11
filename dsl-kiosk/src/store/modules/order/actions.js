import adminApi from "../../../api/adminApi";

export default {
  async setOrder(context, payload) {
    await context.commit("SET_ORDER", payload);
  },
  async fetchOrder({ commit }, payload) {
    try {
      const response = await adminApi.fetchOrder(payload);
      commit("SET_ORDER", response.data);
      return response;
    } catch {
      return null;
    }
  },
};
