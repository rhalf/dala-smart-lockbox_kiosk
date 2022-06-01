import adminApi from "../../../api/adminApi";

export default {
  async setLockerPassed(context, payload) {
    await context.commit("SET_LOCKER_PASS", payload);
  },
  async setLocker(context, payload) {
    await context.commit("SET_LOCKER", payload);
  },
  async setLockers(context, payload) {
    await context.commit("SET_LOCKERS", payload);
  },
  async fetchLockers({ commit, dispatch }) {
    try {
      const response = await adminApi.fetchLockers();
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

  async setLockerOrder({ dispatch }, payload) {
    try {
      const response = await adminApi.checkInParcel(payload);
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
