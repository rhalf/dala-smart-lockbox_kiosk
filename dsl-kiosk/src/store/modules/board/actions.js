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
