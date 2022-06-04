import ssoApi from "../../../api/ssoApi";

export default {
  setToken(context, payload) {
    context.commit("SET_TOKEN", payload);
  },

  async fetchToken({ commit, dispatch }) {
    try {
      const response = await ssoApi.fetchToken();
      console.log(response);
      commit("SET_TOKEN", response.data);
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
