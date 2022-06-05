import adminApi from "../../../api/adminApi";

export default {
  setStatus(context, payload) {
    context.commit("SET_STATUS", payload);
  },

  async connect({ commit }) {
    const response = await adminApi.connectionStatus();
    commit("SET_STATUS", response.status == 200);
    return response;
  },
};
