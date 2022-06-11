import adminApi from "../../../api/adminApi";

export default {
  async setOtp(context, payload) {
    context.commit("SET_OTP", payload);
  },
  async fetchOtp({ commit, dispatch }, payload) {
    try {
      const response = await adminApi.checkOutParcel(payload);
      await commit("SET_OTP", response.data.data);
      await dispatch("order/setOrder", response.data.data.order, {
        root: true,
      });
      await dispatch("locker/setLocker", response.data.data.order.locker, {
        root: true,
      });

      return response;
    } catch {
      return null;
    }
  },

  async verifyOtp({ commit }, payload) {
    try {
      console.log("commit", commit);
      const response = await adminApi.verifyCheckoutParcel(payload);
      return response;
    } catch {
      return null;
    }
  },
};
