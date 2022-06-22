import adminApi from "../../../api/adminApi";

export default {
  async setBoard(context, payload) {
    await context.commit("SET_BOARD", payload);
  },
  async setBoards(context, payload) {
    await context.commit("SET_BOARDS", payload);
  },

  async fetchBoards({ commit }) {
    try {
      const response = await adminApi.fetchBoards();
      commit("SET_BOARDS", response.data);
      return response;
    } catch {
      return null;
    }
  },

  async setLockers(context, payload) {
    await context.commit("SET_LOCKERS", payload);
  },
};
