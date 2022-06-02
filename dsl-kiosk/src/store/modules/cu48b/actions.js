import cu48bApi from "../../../api/cu48bApi";

export default {
  unlockCu48b(context, payload) {
    console.log(context);
    return cu48bApi.unlockCu48b(payload);
  },
  unlockAllCu48b(context) {
    console.log(context);
    return cu48bApi.unlockAllCu48b();
  },

  async fetchCu48b({ commit, dispatch }) {
    try {
      const response = await cu48bApi.fetchCu48b();
      commit("SET_CU48B", response.data);
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
