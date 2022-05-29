export default {
  SET_RIDER(state, rider) {
    state.rider = rider;

    if (rider) localStorage.setItem("rider", JSON.stringify(rider));
    else localStorage.removeItem("rider");
  },
};
