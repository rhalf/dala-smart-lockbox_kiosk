import ssoApi from "@/api/ssoApi";

export default {
  async setLockerPassed(context, payload) {
    await context.commit("SET_LOCKER_PASS", payload);
  },
  async setLocker(context, payload) {
    await context.commit("SET_LOCKER", payload);
  },

  async setLockerOrder({ commit }, payload) {
    try {
      console.log("commit", commit);
      const response = await ssoApi.checkInParcel(payload);
      return response;
    } catch {
      return null;
    }
  },

  //   async openLocker({ commit }, payload) {
  //     console.log("commit", commit);
  //     return await ssoApi.lockerOpen(payload);
  //   },
  //   async closeLocker({ commit }, payload) {
  //     console.log("commit", commit);
  //     return await ssoApi.lockerClose(payload);
  //   },
  //   async openStateLocker({ commit }, payload) {
  //     console.log("commit", commit);
  //     return await ssoApi.lockerOpenState(payload);
  //   },
};
