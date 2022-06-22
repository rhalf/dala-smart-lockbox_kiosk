import adminApi from "../../../api/adminApi";

export default {
  async setLockerPassed(context, payload) {
    await context.commit("SET_LOCKER_PASS", payload);
  },
  async setLocker(context, payload) {
    await context.commit("SET_LOCKER", payload);
  },

  async fetchBoards({ commit }) {
    try {
      const response = await adminApi.fetchBoards();
      commit("SET_LOCKERS", response.data);
      return response;
    } catch {
      return null;
    }
  },
  async setLockerOrder({ commit }, payload) {
    try {
      console.log("commit", commit);
      const response = await adminApi.checkInParcel(payload);
      return response;
    } catch {
      return null;
    }
  },

  async openLocker({ commit }, payload) {
    console.log("commit", commit);
    return await adminApi.lockerOpen(payload);
  },
  async closeLocker({ commit }, payload) {
    console.log("commit", commit);
    return await adminApi.lockerClose(payload);
  },
  async openStateLocker({ commit }, payload) {
    console.log("commit", commit);
    return await adminApi.lockerOpenState(payload);
  },
};
