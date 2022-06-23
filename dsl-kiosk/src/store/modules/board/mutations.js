export default {
  SET_BOARD(state, board) {
    state.board = board;
  },
  SET_BOARDS(state, boards) {
    state.boards = boards;
  },

  SET_LOCKERS(state, payload) {
    state.boards[payload.id].Lockers = [...payload.lockers];
  },
};
