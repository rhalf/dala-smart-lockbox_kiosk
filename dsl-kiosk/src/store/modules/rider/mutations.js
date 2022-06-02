export default {
  SET_RIDER(state, payload) {
    state.rider = payload;

    if (payload) localStorage.setItem("rider", JSON.stringify(payload));
    else localStorage.removeItem("rider");
  },
};
