import adminApi from "../../../api/adminApi";

export default {
  setRider(context, payload) {
    context.commit("SET_RIDER", payload);
  },

  async fetchByIdPin({ commit, dispatch }, payload) {
    try {
      const response = await adminApi.loginRider(payload);
      commit("SET_RIDER", response.data.data.rider);
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
      console.log(error);

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
