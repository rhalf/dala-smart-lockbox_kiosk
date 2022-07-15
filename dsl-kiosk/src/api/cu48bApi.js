import { cu48bApi } from "./conf";

export default {
  unlockCu48b(payload) {
    return cu48bApi.post(
      `/cu48b/${payload.boardNumber}/${payload.lockerNumber}`
    );
  },
  unlockAllCu48b(payload) {
    return cu48bApi.delete(`/cu48b/${payload.boardNumber}`);
  },
  fetchCu48b(payload) {
    return cu48bApi.get(`/cu48b/${payload.boardNumber}`);
  },
};
