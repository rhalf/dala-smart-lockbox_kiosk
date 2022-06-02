import adminApi from "../../../api/adminApi";

export default {
  async setOtp(context, payload) {
    context.commit("SET_OTP", payload);
  },
  async fetchOtp({ commit, dispatch }, payload) {
    try {
      const response = await adminApi.checkOutParcel(payload);
      await commit("SET_OTP", response.data);
      await dispatch("order/setOrder", response.data.data.order, {
        root: true,
      });

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
