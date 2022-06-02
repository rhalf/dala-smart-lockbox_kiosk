import adminApi from "../../../api/adminApi";

export default {
  async setOrder(context, payload) {
    await context.commit("SET_ORDER", payload);
  },
  async fetchOrder({ commit, dispatch }, payload) {
    try {
      const response = await adminApi.fetchOrder(payload);
      commit("SET_ORDER", response.data);
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
          messages: [message1, message2],
        },
        { root: true }
      );
    }
  },

  async fetchOrderByCode({ dispatch }, payload) {
    try {
      const response = await adminApi.checkOutParcel(payload);
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
          messages: [message1, message2],
        },
        { root: true }
      );
    }
  },
};
