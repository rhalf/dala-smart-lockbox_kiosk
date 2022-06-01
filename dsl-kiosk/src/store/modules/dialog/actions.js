export default {
  async setError(context, payload) {
    context.commit("SET_ERROR", payload);
  },
};
