import cu48bApi from "../../../api/cu48bApi";

export default {
  unlockCu48b(context, payload) {
    console.log(context);
    return cu48bApi.unlockCu48b(payload);
  },
  unlockAllCu48b(context) {
    console.log(context);
    return cu48bApi.unlockAllCu48b();
  },

  async fetchCu48b({ commit }) {
    try {
      const response = await cu48bApi.fetchCu48b();
      commit("SET_CU48B", response.data);
      return response;
    } catch {
      return false;
    }
  },
};
