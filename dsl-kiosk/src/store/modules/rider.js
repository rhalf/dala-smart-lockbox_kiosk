const rider = {
  state: {
    rider: null,
  },
  mutations: {
    setRider(state, rider) {
      state.rider = rider;
    },
  },
  actions: {
    setRider(context, rider) {
      context.commit("setRider", rider);
    },
  },

  getters: {
    getRider: (state) => {
      return state.rider;
    },
  },
};

export default rider;
