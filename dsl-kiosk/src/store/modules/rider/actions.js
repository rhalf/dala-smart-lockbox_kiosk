import dslCloudApi from "../../../api/dslCloudApi";

export default {
  setRider(context, rider) {
    context.commit("SET_RIDER", rider);
  },

  async fetchByIdPin({ commit, dispatch }, data) {
    try {
      const response = await dslCloudApi.loginRider(data.id, data.pin);
      commit("SET_RIDER", { name: "rider" });
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
