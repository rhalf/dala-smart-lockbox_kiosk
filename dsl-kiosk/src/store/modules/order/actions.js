import dslCloudApi from "../../../api/dslCloudApi";

export default {
  async setOrder(context, order) {
    context.commit("SET_ORDER", order);
  },
  async fetchOrder({ commit, dispatch }, order) {
    try {
      const response = await dslCloudApi.fetchOrder(order.id);
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
      console.log(error);

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
