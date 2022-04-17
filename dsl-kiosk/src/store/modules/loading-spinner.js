const loadingSpinner = {
  state: {
    item: {
      visible: true,
    },
  },
  mutations: {
    setLoadingSpinner(state, item) {
      state.item = item;
    },
  },
  actions: {
    setLoadingSpinner(context, item) {
      context.commit("setLoadingSpinner", item);
    },
  },

  getters: {
    getLoadingSpinner: (state) => {
      return state.item;
    },
  },
};

export default loadingSpinner;
