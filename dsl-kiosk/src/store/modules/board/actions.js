import ssoApi from "@/api/ssoApi";

export default {
  async setBoard(context, payload) {
    await context.commit("SET_BOARD", payload);
  },
  async setBoards(context, payload) {
    await context.commit("SET_BOARDS", payload);
  },

  async readBoards({ commit }) {
    try {
      const response = await ssoApi.readBoards();

      let boards = response.data;
      let count = 0;
      boards.forEach((b) => {
        b.Lockers.forEach((l) => {
          count++;
          l.display = count;
        });
      });

      commit("SET_BOARDS", response.data);
      return response;
    } catch {
      return null;
    }
  },
};
