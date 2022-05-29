export default {
  async setError(context, error) {
    context.commit("SET_ERROR", error);
  },
};
