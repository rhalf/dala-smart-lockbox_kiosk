export default {
  SET_TOKEN(state, payload) {
    state.token = payload;

    if (payload) localStorage.setItem("token", JSON.stringify(payload));
    else localStorage.removeItem("token");
  },
};
