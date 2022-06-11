import { cu48bApi } from "./conf";

export default {
  unlockCu48b(payload) {
    return cu48bApi.post(`/cu48b/${payload.id - 1}`);
  },
  unlockAllCu48b() {
    return cu48bApi.delete(`/cu48b/`);
  },
  fetchCu48b() {
    return cu48bApi.get(`/cu48b/`);
  },
};
