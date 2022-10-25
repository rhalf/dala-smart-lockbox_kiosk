import cu48bApi from "@/api/cu48bApi";

export default {
  unlockCu48b(context, payload) {
    console.log(context);
    return cu48bApi.unlockCu48b(payload);
  },
  unlockAllCu48b(context, payload) {
    console.log(context);
    return cu48bApi.unlockAllCu48b(payload);
  },

  async readCu48b({ commit }, payload) {
    try {
      const response = await cu48bApi.readCu48b(payload);
      commit("SET_CU48B", response.data);
      return response;
    } catch {
      return false;
    }
  },
};
