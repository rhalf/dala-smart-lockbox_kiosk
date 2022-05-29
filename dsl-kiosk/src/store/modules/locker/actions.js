import dslCloudApi from "../../../api/dslCloudApi";

export default {
  async setLocker(context, locker) {
    await context.commit("SET_LOCKER", locker);
  },
  async setLockers(context, lockers) {
    await context.commit("SET_LOCKERS", lockers);
  },
  async fetchLockers({ commit, dispatch }) {
    try {
      const response = await dslCloudApi.fetchLockers();
      commit("SET_LOCKERS", response.data);
      return response;
    } catch (error) {
      let message1, message2;

      if (error) message1 = error.message;
      if (error) {
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.data) {
              message2 = error.response.data.data.message;
            } else {
              message2 = error.response.data;
            }
          }
        }
      }
      dispatch(
        "dialog/setError",
        {
          visible: true,
          message1: message1,
          message2: message2,
        },
        { root: true }
      );
    }
  },
};
