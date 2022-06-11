import adminApi from "../../../api/adminApi";

export default {
  setOffline(context, payload) {
    context.commit("SET_OFFLINE", payload);
  },

  setMaintenance(context, payload) {
    context.commit("SET_MAINTENANCE", payload);
  },

  async connect({ commit }) {
    try {
      console.log("commit", commit);
      const response = await adminApi.connectionStatus();
      return response;
    } catch {
      return null;
    }
  },
};
