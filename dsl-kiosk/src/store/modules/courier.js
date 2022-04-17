const courier = {
  state: {
    courier: null,
  },
  mutations: {
    setCourier(state, courier) {
      state.courier = courier;
    },
  },
  actions: {
    setCourier(context, courier) {
      context.commit("setCourier", courier);
    },
  },

  getters: {
    getCourier: (state) => {
      return state.courier;
    },
  },
};

export default courier;
